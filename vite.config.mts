import { defineConfig, type UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import checker from 'vite-plugin-checker'
import cssInjectedByJs from 'vite-plugin-css-injected-by-js'
import { readFile, writeFile, copyFile } from 'fs/promises'
import { transform } from 'esbuild'
import { join } from 'path'
import dotenv from 'dotenv'
import { parse } from 'semver'
import type { OutputChunk } from 'rollup'
import pkg from './package.json'

const version = parse(pkg.version)

dotenv.config({
  path: './.env.local',
})
dotenv.config()

const versionString = `${version?.major}.${version?.minor}.${version?.patch}`
const outDir = 'dist'

const versionFiles = [
  `latest.js`,
  `${version?.major}.x.x.js`,
  `${version?.major}.${version?.minor}.x.js`,
]

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const opts: UserConfig = {
    base: command === 'serve' ? '/' : `${process.env.PUBLIC_URL}/`,
    build: {
      outDir,
      manifest: false,
      copyPublicDir: false,
      sourcemap: false,
      chunkSizeWarningLimit: 6000,
      modulePreload: false,
      rollupOptions: {
        input: mode === 'development' ? './src/dev.tsx' : './src/index.tsx',
        output: {
          // We use versionString to ensure the files for a single version's
          // deployment are in the correct directory.
          entryFileNames: `${versionString}/index-[hash].js`,
          chunkFileNames: `${versionString}/[name]-[hash].js`,
          assetFileNames: `${versionString}/[hash][extname]`,
        },
        preserveEntrySignatures: 'exports-only',
      },
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify('production'),
      __TENANT__: `'${process.env.TENANT}'`,
      __ENVIRONMENT__: `'${process.env.ENVIRONMENT}'`,
    },
    resolve: {
      dedupe: ['react', 'react-dom'],
    },
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      }),
      viteTsconfigPaths(),
      cssInjectedByJs(),
      checker({
        typescript: true,
        eslint: { lintCommand: 'eslint src/**/*.{ts,tsx}' },
      }),
      {
        name: 'ignored-node-polyfills',
        load(id) {
          if (id.includes('@smithy/node-http-handler')) {
            return `export default { NodeHttpHandler: null }`
          }
        },
      },
      // Rollup cannot code-split UMD/IIFE bundles, so we build as ESM and
      // generate a thin IIFE wrapper that can be loaded via a plain <script>
      // tag. The wrapper exposes window.OneBlinkForms and dynamically imports
      // the ESM entry. This avoids having to add `type="module"` to every
      // existing <script> tag that loads the bundle.
      {
        name: 'generate-umd-wrapper',
        apply: 'build',
        enforce: 'post',
        async writeBundle(_options, bundle) {
          const entryChunk = Object.values(bundle).find(
            (chunk): chunk is OutputChunk =>
              chunk.type === 'chunk' && chunk.isEntry,
          )
          if (!entryChunk) return

          const source = await readFile(
            join(__dirname, 'src/wrapper.ts'),
            'utf-8',
          )
          const { code } = await transform(source, {
            loader: 'ts',
            minify: false,
          })
          const wrapperCode = code.replace(
            '__ENTRY_FILE__',
            entryChunk.fileName,
          )

          const patchFile = join(outDir, `${versionString}.js`)
          await writeFile(patchFile, wrapperCode)
          await Promise.all(
            versionFiles.map((v) => copyFile(patchFile, join(outDir, v))),
          )
        },
      },
    ],
    server: {
      open: true,
      port: 3000,
    },
  }

  if (mode === 'development') {
    const exclude: string[] = []

    if (process.env.NPM_LINK_APPS_REACT) {
      exclude.push('@oneblink/apps-react')
    }

    if (process.env.NPM_LINK_STORAGE) {
      exclude.push('@oneblink/storage')
    }

    if (exclude.length) {
      opts.optimizeDeps = { exclude }
    }
  }
  return opts
})

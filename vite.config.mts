import { defineConfig, type UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import checker from 'vite-plugin-checker'
import cssInjectedByJs from 'vite-plugin-css-injected-by-js'
import { copyFile } from 'fs/promises'
import dotenv from 'dotenv'
import { parse } from 'semver'
import pkg from './package.json'
const version = parse(pkg.version)

dotenv.config({
  path: './.env.local',
})
dotenv.config()

const staticLazyLoadedFiles = [
  {
    moduleIdPrefixes: ['@arcgis', '@esri'],
    directory: 'arcgis',
  },
  {
    moduleIdPrefixes: ['@nylas'],
    directory: 'nylas',
  },
]

const latestFileName = 'latest.js'
const outDir = 'dist'

const versions = [
  `${version?.major}.x.x.js`,
  `${version?.major}.${version?.minor}.x.js`,
  `${version?.major}.${version?.minor}.${version?.patch}.js`,
]

export default defineConfig(({ mode }) => {
  const opts: UserConfig = {
    build: {
      lib: {
        entry: './src/index.tsx',
        fileName: () => latestFileName,
        name: 'OneBlinkForms',
        formats: ['umd'],
      },
      outDir,
      manifest: false,
      copyPublicDir: false,
      assetsDir: 'static',
      sourcemap: false,
      modulePreload: {
        resolveDependencies() {
          return []
        },
      },
      rollupOptions: {
        output: {
          chunkFileNames(preRenderedChunk) {
            for (const {
              moduleIdPrefixes,
              directory,
            } of staticLazyLoadedFiles) {
              if (
                moduleIdPrefixes.some((moduleIdPrefix) => {
                  return preRenderedChunk.moduleIds.some((moduleId) => {
                    return moduleId.includes(moduleIdPrefix)
                  })
                })
              ) {
                return `static/${directory}/[name]-[hash].js`
              }
            }

            return 'static/[name]-[hash].js'
          },
        },
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
      {
        name: 'copy-versions',
        apply: 'build',
        async writeBundle() {
          await Promise.all(
            versions.map((version) => {
              return copyFile(`./${outDir}/latest.js`, `./${outDir}/${version}`)
            }),
          )
        },
      },
    ],
    server: {
      open: true,
      port: 8080,
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

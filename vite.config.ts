import fs from 'fs/promises'
import path from 'path'

import { parse } from 'semver'
import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

import pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const opts: UserConfig = {
    build: {
      outDir: 'dist',
      sourcemap: false,
      copyPublicDir: false,
      lib: {
        entry: './src/index.tsx',
        name: 'OneBlinkForms',
        formats: ['umd'],
        fileName() {
          return 'latest.js'
        },
      },
    },
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      }),
      libInjectCss(),
      viteTsconfigPaths(),
      {
        name: 'ignored-node-polyfills',
        load(id) {
          if (id.includes('@smithy/node-http-handler')) {
            return `export default { NodeHttpHandler: null }`
          }
        },
      },
      ,
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
    if (process.env.NPM_LINK_APPS) {
      exclude.push('@oneblink/apps')
    }

    if (exclude.length) {
      opts.optimizeDeps = { exclude }
    }

    // Add development build plugins
  } else {
    // Add production build plugins
    opts.plugins?.push({
      name: 'generate-semver-versions',
      async closeBundle() {
        const version = parse(pkg.version)
        if (!version) {
          throw new Error('version not defined in package.json')
        }

        this.info('Building x.x.x files for version: ' + version.version)

        const distPath = path.join(__dirname, 'dist')
        const latestPath = path.join(distPath, 'latest.js')

        const content = await fs.readFile(latestPath)

        const majorFileName = `${version.major}.x.x.js`
        const minorFileName = `${version.major}.${version.minor}.x.js`
        const patchFileName = `${version.major}.${version.minor}.${version.patch}.js`
        const newFileNames = [majorFileName, minorFileName, patchFileName]

        for (const newFileName of newFileNames) {
          this.info('Creating file: ' + newFileName)
          await fs.writeFile(path.join(distPath, newFileName), content, 'utf-8')
        }
      },
    })
  }

  return opts
})

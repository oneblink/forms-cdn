import js from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import prettier from 'eslint-config-prettier/flat'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import pluginSecurity from 'eslint-plugin-security'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const pluginSecurityStrict = {
  ...pluginSecurity.configs.recommended,
  rules: {
    ...Object.fromEntries(
      Object.keys(pluginSecurity.configs.recommended.rules).map((rule) => [
        rule,
        'error',
      ]),
    ),
    'security/detect-object-injection': 'warn',
  },
}

export default defineConfig([
  globalIgnores([
    'dist',
    'node_modules',
    'vite.config.mts',
    'public/configuration.js',
  ]),
  js.configs.recommended,
  tseslint.configs.recommended,
  react.configs.flat.recommended,
  reactHooks.configs.flat.recommended,
  pluginSecurityStrict,
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        projectService: {
          allowDefaultProject: ['*.js', '*.mjs'],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 0,
      'react/no-danger': 'warn',
    },
  },
  {
    files: ['*.js', '*.mjs'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  prettier,
])

import js from '@eslint/js'
import globals from 'globals'
import prettier from 'eslint-config-prettier'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  { ignores: ['dist', 'temp'] },
  js.configs.recommended,
  prettier,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      'no-tabs': 'error',
      'no-unexpected-multiline': 'error'
    }
  }
]

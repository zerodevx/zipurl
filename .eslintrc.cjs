module.exports = {
  root: true,
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest'
  },
  env: {
    browser: true,
    node: true
  },
  rules: {
    'no-tabs': 'error',
    'no-unexpected-multiline': 'error'
  }
}

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['import', '@typescript-eslint'],
  rules: {
    'no-debugger': 'error',
  },
}

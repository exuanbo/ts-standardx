const prettierStandard = require('./.prettierrc.js')

module.exports = {
  extends: ['standard', 'prettier', 'prettier/standard'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': ['error', prettierStandard]
  }
}

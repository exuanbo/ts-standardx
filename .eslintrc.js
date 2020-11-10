const { existsSync } = require('fs')
const { join } = require('path')
const rootPath = require('standard-engine-ts').getRootPath()

const getTsconfig = () => {
  const filePath = join(rootPath, 'tsconfig.json')
  return (existsSync(filePath) && filePath) || undefined
}

module.exports = {
  extends: ['standard', 'plugin:prettier/recommended', 'prettier/standard'],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', require('./.prettierrc.js')]
  },
  overrides: [
    {
      files: ['**/*.ts'],
      extends: ['standard-with-typescript', 'prettier/@typescript-eslint'],
      parserOptions: {
        project: getTsconfig() || './tsconfig.json'
      }
    }
  ]
}

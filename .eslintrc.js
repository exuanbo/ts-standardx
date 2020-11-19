const fs = require('fs')
const path = require('path')
const { getRootPath } = require('standard-engine-ts')

const getTsconfig = () => {
  const rootPath = getRootPath()
  const filePath = path.join(rootPath, 'tsconfig.json')
  return (fs.existsSync(filePath) && filePath) || undefined
}

module.exports = {
  extends: [
    'standard',
    'standard-jsx',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/standard'
  ],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['standard-with-typescript', 'prettier/@typescript-eslint'],
      parserOptions: {
        project: getTsconfig() || path.join(__dirname, './tsconfig.json')
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', require('./.prettierrc.js')]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}

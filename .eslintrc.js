const path = require('path')

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
      extends: [
        'standard-with-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier/@typescript-eslint'
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: path.join(process.cwd(), 'tsconfig.json')
      }
    }
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', require('./.prettierrc.js')]
  }
}

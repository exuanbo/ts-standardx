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
      extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint'
      ],
      plugins: ['@typescript-eslint']
    }
  ]
}

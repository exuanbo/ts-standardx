import path from 'path'
import { compatRules } from './compatRules'

const PRETTIER_STANDARD = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  jsxBracketSameLine: true,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none'
}

export default {
  extends: [
    'standard',
    'standard-jsx',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/standard'
  ],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint'
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: path.join(process.cwd(), 'tsconfig.json')
      },
      rules: compatRules
    }
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', PRETTIER_STANDARD]
  }
}

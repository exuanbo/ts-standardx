import { Linter } from 'eslint'
import { compatRules } from './compatRules'
import { rules } from './rules'
import { isModuleAvailable } from './utils'

const PRETTIER_STANDARD = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  jsxBracketSameLine: true,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none'
}

const eslintrc: Linter.BaseConfig = {
  extends: [
    'standard',
    'standard-jsx',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/standard'
  ],
  overrides: isModuleAvailable('typescript')
    ? [
        {
          files: ['**/*.ts', '**/*.tsx'],
          extends: [
            'plugin:@typescript-eslint/recommended',
            'prettier/@typescript-eslint'
          ],
          parser: '@typescript-eslint/parser',
          parserOptions: {
            project: './tsconfig.json'
          },
          rules: {
            ...compatRules,
            ...rules
          }
        }
      ]
    : undefined,
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', PRETTIER_STANDARD]
  }
}

export default eslintrc

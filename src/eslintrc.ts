import type { Linter } from 'eslint'
import { compatRules } from './compatRules'
import { rules } from './rules'
import { isModuleAvailable } from './utils'

const PRETTIER_STANDARD = {
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  jsxBracketSameLine: true,
  arrowParens: 'avoid'
}

const eslintrc: Linter.BaseConfig = {
  extends: ['standard', 'standard-jsx', 'plugin:prettier/recommended'],
  overrides: isModuleAvailable('typescript')
    ? [
        {
          files: ['**/*.ts', '**/*.tsx'],
          extends: ['plugin:@typescript-eslint/recommended'],
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
  rules: {
    'prettier/prettier': ['error', PRETTIER_STANDARD],
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false }
    ]
  }
}

export default eslintrc

import type { Linter } from 'eslint'
import { rules } from './rules'
import {
  prettierCompatRules,
  prettierTypescriptCompatRules,
  compatRules
} from './compatRules'
import { isModuleAvailable } from './utils'

const PRETTIER_STANDARD = {
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  jsxBracketSameLine: true,
  arrowParens: 'avoid'
}

const eslintrc: Linter.BaseConfig = {
  extends: ['standard', 'standard-jsx', 'prettier'],
  plugins: ['prettier'],
  rules: {
    ...prettierCompatRules,
    'prettier/prettier': ['error', PRETTIER_STANDARD]
  },
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
            ...prettierTypescriptCompatRules,
            ...compatRules,
            ...rules
          }
        }
      ]
    : undefined
}

export default eslintrc

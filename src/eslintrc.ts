import type { Linter } from 'eslint'
import { rules } from './rules'
import { prettierCompatRules, compatRules, prettierTypescriptCompatRules } from './compatRules'
import { isModuleAvailable } from './utils'

const PRETTIER_STANDARD = {
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  bracketSameLine: true,
  arrowParens: 'avoid'
}

const eslintrc: Linter.BaseConfig = {
  extends: ['standard', 'standard-jsx', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', PRETTIER_STANDARD],
    ...prettierCompatRules
  },
  overrides: isModuleAvailable('typescript')
    ? [
        {
          files: ['**/*.ts', '**/*.tsx'],
          extends: ['plugin:@typescript-eslint/recommended'],
          parserOptions: {
            project: './tsconfig.json'
          },
          rules: {
            ...rules,
            ...compatRules,
            ...prettierTypescriptCompatRules
          }
        }
      ]
    : undefined
}

export default eslintrc

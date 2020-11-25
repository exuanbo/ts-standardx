import { Linter } from 'eslint'
import { rules } from 'eslint-config-standard/eslintrc.json'

type RuleName = keyof typeof rules
type RuleEntry = typeof rules[RuleName]

/**
 * @link https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
 */
const RULES_MAP: RuleName[] = [
  'lines-between-class-members',
  'no-dupe-class-members',
  'no-implied-eval',
  'no-loss-of-precision',
  'no-redeclare',
  'no-throw-literal',
  'no-unused-expressions',
  'no-useless-constructor'
]

export const compatRules: Partial<Linter.RulesRecord> = {
  'no-undef': 'off', // Typescript built-in
  camelcase: 'off',

  'dot-notation': 'off',
  '@typescript-eslint/dot-notation': 'error',

  '@typescript-eslint/no-duplicate-imports': 'error',

  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': [
    'error',
    {
      functions: false,
      classes: false,
      variables: false,
      enums: false,
      ignoreTypeReferences: true
    }
  ],

  ...Object.fromEntries(
    RULES_MAP.map((rule): [[RuleName, 'off'], [string, RuleEntry]] => [
      [rule, 'off'],
      [`@typescript-eslint/${rule}`, rules[rule]]
    ]).flat()
  )
}

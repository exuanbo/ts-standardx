import { Linter } from 'eslint'
import { rules } from 'eslint-config-standard/eslintrc.json'

type RuleName = keyof typeof rules
type RuleEntry = typeof rules[RuleName]

/**
 * @link https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
 */
const RULES_MAP: RuleName[] = [
  'brace-style',
  'comma-spacing',
  'func-call-spacing',
  'keyword-spacing',
  'lines-between-class-members',
  'no-array-constructor',
  'no-dupe-class-members',
  'no-extra-parens',
  'no-implied-eval',
  'no-loss-of-precision',
  'no-redeclare',
  'no-throw-literal',
  'no-unused-expressions',
  'no-useless-constructor',
  'quotes',
  'semi',
  'space-before-function-paren',
  'space-infix-ops'
]

export const compatRules: Partial<Linter.RulesRecord> = {
  'no-undef': 'off', // Typescript built-in
  camelcase: 'off',

  'dot-notation': 'off',
  '@typescript-eslint/dot-notation': 'error',

  '@typescript-eslint/no-duplicate-imports': 'error',

  '@typescript-eslint/no-extra-semi': 'off', // Turned on in @typescript-eslint/recommended

  'no-unused-vars': 'off', // Turned on in @typescript-eslint/recommended

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

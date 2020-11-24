import { Linter } from 'eslint'
import { rules } from 'eslint-config-standard/eslintrc.json'

type ruleName = keyof typeof rules
type typescriptRuleName = `@typescript-eslint/${string}`

/**
 * https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
 */
const RULES_MAP: Array<ruleName | [ruleName, typescriptRuleName]> = [
  'brace-style',
  'comma-spacing',
  'func-call-spacing',
  'indent',
  'keyword-spacing',
  'lines-between-class-members',
  'no-array-constructor',
  'no-dupe-class-members',
  ['import/no-duplicates', '@typescript-eslint/no-duplicate-imports'],
  'no-extra-parens',
  'no-implied-eval',
  'no-loss-of-precision',
  'no-redeclare',
  'no-throw-literal',
  'no-unused-expressions',
  'no-unused-vars',
  'no-use-before-define',
  'no-useless-constructor',
  'quotes',
  'semi',
  'space-before-function-paren',
  'space-infix-ops'
]

export const compatRules: Partial<Linter.RulesRecord> = {
  'no-undef': 'off',
  camelcase: 'off',

  'dot-notation': 'off',
  '@typescript-eslint/dot-notation': 'error',

  ...Object.fromEntries(
    RULES_MAP.map((rule): [
      [ruleName, unknown],
      [typescriptRuleName, unknown]
    ] => {
      if (Array.isArray(rule)) {
        return [
          [rule[0], 'off'],
          [rule[1], rules[rule[0]]]
        ]
      }
      return [
        [rule, 'off'],
        [`@typescript-eslint/${rule}` as typescriptRuleName, rules[rule]]
      ]
    }).flat()
  )
}

import { Linter } from 'eslint'
import { rules } from 'eslint-config-standard/eslintrc.json'

type RuleName = keyof typeof rules
type RuleEntry = typeof rules[RuleName]

const RULES_MAP: RuleName[] = [
  'lines-between-class-members',
  'no-implied-eval',
  'no-loss-of-precision',
  'no-throw-literal',
  'no-unused-expressions',
  'no-unused-vars',
  'no-useless-constructor'
]

export const compatRules: Partial<Linter.RulesRecord> = {
  /**
   * Use `@typescript-eslint/naming-convention` instead
   * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
   */
  camelcase: 'off',

  /**
   * Error when using the same option from `eslint-config-standard`
   * @link https://github.com/standard/eslint-config-standard/blob/master/eslintrc.json#L58
   */
  'dot-notation': 'off',
  /**
   * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md
   */
  '@typescript-eslint/dot-notation': 'error',

  /**
   * The original rule is turned off by `@typescript-eslint/eslint-recommended`
   * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/eslint-recommended.ts#L15
   */
  '@typescript-eslint/no-dupe-class-members': 'error',

  /**
   * Extend `import/no-duplicates` from eslint-config-standard
   * @link https://github.com/standard/eslint-config-standard/blob/master/eslintrc.json#L229
   */
  '@typescript-eslint/no-duplicate-imports': 'error',

  /**
   * The original rule is turned off by `@typescript-eslint/eslint-recommended`
   * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/eslint-recommended.ts#L21
   */
  '@typescript-eslint/no-redeclare': 'error',

  /**
   * Add @typescript-eslint specific options
   * @link https://github.com/standard/eslint-config-standard/blob/master/eslintrc.json#L180
   */
  'no-use-before-define': 'off',
  /**
   * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
   */
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

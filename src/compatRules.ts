import type { Linter } from 'eslint'
import { rules } from 'eslint-config-standard/eslintrc.json'

type RuleName = keyof typeof rules

const EQUIVALENT_RULES: RuleName[] = [
  'lines-between-class-members',
  'no-implied-eval',
  'no-loss-of-precision',
  'no-throw-literal',
  'no-unused-expressions',
  'no-unused-vars',
  'no-useless-constructor'
]

export const compatRules: Linter.RulesRecord = {
  /**
   * Use `@typescript-eslint/naming-convention` instead
   *
   * {@link https://github.com/standard/eslint-config-standard/blob/master/eslintrc.json#L39}
   */
  camelcase: 'off',

  /** {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md} */
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'variable',
      format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      leadingUnderscore: 'allow',
      trailingUnderscore: 'allow'
    }
  ],

  /**
   * Error when using the same option from `eslint-config-standard`
   *
   * {@link https://github.com/standard/eslint-config-standard/blob/master/eslintrc.json#L58}
   */
  'dot-notation': 'off',

  /** {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md} */
  '@typescript-eslint/dot-notation': 'error',

  /**
   * `no-dupe-class-members` is turned off by `@typescript-eslint/eslint-recommended`
   *
   * {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/eslint-recommended.ts#L15}
   */
  '@typescript-eslint/no-dupe-class-members': 'error',

  /**
   * Extend `import/no-duplicates` from `eslint-config-standard`
   *
   * {@link https://github.com/standard/eslint-config-standard/blob/master/eslintrc.json#L229}
   */
  '@typescript-eslint/no-duplicate-imports': 'error',

  /**
   * `no-redeclare` is turned off by `@typescript-eslint/eslint-recommended`
   *
   * {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/eslint-recommended.ts#L21}
   */
  '@typescript-eslint/no-redeclare': 'error',

  /**
   * Add `@typescript-eslint` specific options
   *
   * {@link https://github.com/standard/eslint-config-standard/blob/master/eslintrc.json#L180}
   */
  'no-use-before-define': 'off',

  /** {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md} */
  '@typescript-eslint/no-use-before-define': [
    'error',
    {
      functions: false,
      classes: false,
      variables: false,
      ignoreTypeReferences: true
    }
  ],

  /**
   * Resolve `@typescript-eslint/no-floating-promises` error with void operator
   *
   * {@link https://github.com/standard/eslint-config-standard/blob/master/eslintrc.json#L187}
   */
  'no-void': ['error', { allowAsStatement: true }],

  ...Object.fromEntries(
    EQUIVALENT_RULES.map(rule => [
      [rule, 'off'],
      [`@typescript-eslint/${rule}` as const, rules[rule]]
    ]).flat()
  )
}

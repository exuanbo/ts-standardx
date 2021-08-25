import type { Linter } from 'eslint'
import { rules as prettierRules } from 'eslint-config-prettier'
import { rules as standardRules } from 'eslint-config-standard/eslintrc.json'
import { isTypescriptRule } from '../src/utils'

export const prettierCompatRules: Linter.RulesRecord = {
  'arrow-body-style': 'off',
  'prefer-arrow-callback': 'off',

  /**
   * Turned off by `eslint-config-prettier`
   * at {@link https://github.com/prettier/eslint-config-prettier/blob/main/index.js#L17}
   *
   * @see {@link https://github.com/prettier/eslint-config-prettier#quotes}
   */
  quotes: [
    'error',
    'single',
    {
      avoidEscape: true,
      allowTemplateLiterals: false
    }
  ]
}

/**
 * {@link https://github.com/prettier/eslint-config-prettier/blob/main/index.js#L97-L110}
 */
export const prettierTypescriptCompatRules: Linter.RulesRecord = Object.fromEntries(
  Object.entries(prettierRules).filter(
    ([ruleName, ruleEntry]) => isTypescriptRule(ruleName) && ruleEntry !== 0
  )
)

const standardEquivalentRuleNames = [
  'lines-between-class-members',
  'no-implied-eval',
  'no-loss-of-precision',
  'no-throw-literal',
  'no-unused-expressions',
  'no-unused-vars',
  'no-useless-constructor',
  'quotes'
] as const

const standardEquivalentRules: Linter.RulesRecord = Object.fromEntries(
  standardEquivalentRuleNames
    .map(ruleName => [
      [ruleName, 'off'],
      [`@typescript-eslint/${ruleName}`, standardRules[ruleName]]
    ])
    .flat()
)

export const compatRules: Linter.RulesRecord = {
  /**
   * Use `@typescript-eslint/naming-convention` instead
   *
   * {@link https://github.com/standard/eslint-config-standard/blob/master/eslintrc.json#L39}
   */
  camelcase: 'off',

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md}
   */
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'variableLike',
      format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      leadingUnderscore: 'allowSingleOrDouble',
      trailingUnderscore: 'allowSingleOrDouble'
    }
  ],

  /**
   * Error when using the same option from `eslint-config-standard`
   *
   * {@link https://github.com/standard/eslint-config-standard/blob/master/eslintrc.json#L58}
   */
  'dot-notation': 'off',

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md}
   */
  '@typescript-eslint/dot-notation': 'error',

  /**
   * `no-dupe-class-members` is turned off by `@typescript-eslint/eslint-recommended`
   * at {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/eslint-recommended.ts#L15}
   *
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md}
   */
  '@typescript-eslint/no-dupe-class-members': 'error',

  /**
   * Extend `import/no-duplicates` from `eslint-config-standard`
   * at {@link https://github.com/standard/eslint-config-standard/blob/master/eslintrc.json#L229}
   *
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-duplicate-imports.md}
   */
  '@typescript-eslint/no-duplicate-imports': 'error',

  /**
   * `no-redeclare` is turned off by `@typescript-eslint/eslint-recommended`
   * at {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/eslint-recommended.ts#L21}
   *
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-redeclare.md}
   */
  '@typescript-eslint/no-redeclare': ['error', { builtinGlobals: false }],

  /**
   * Add `@typescript-eslint` specific options
   *
   * {@link https://github.com/standard/eslint-config-standard/blob/master/eslintrc.json#L180}
   */
  'no-use-before-define': 'off',

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md}
   */
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

  ...standardEquivalentRules
}

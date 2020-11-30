import { Linter } from 'eslint'

/**
 * @link https://github.com/standard/eslint-config-standard-with-typescript/blob/master/src/index.ts#L66
 */
export const rules: Partial<Linter.RulesRecord> = {
  '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
  '@typescript-eslint/consistent-type-assertions': [
    'error',
    {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'allow-as-parameter'
    }
  ],
  '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
  '@typescript-eslint/explicit-function-return-type': [
    'error',
    {
      allowExpressions: true
    }
  ],
  '@typescript-eslint/method-signature-style': 'error',
  '@typescript-eslint/naming-convention': 'error',
  '@typescript-eslint/no-base-to-string': 'error',
  '@typescript-eslint/no-dynamic-delete': 'error',
  '@typescript-eslint/no-extraneous-class': [
    'error',
    { allowWithDecorator: true }
  ],
  '@typescript-eslint/no-floating-promises': [
    'error',
    {
      ignoreVoid: true,
      ignoreIIFE: true
    }
  ],
  '@typescript-eslint/no-invalid-void-type': 'error',
  '@typescript-eslint/no-this-alias': ['error', { allowDestructuring: true }],
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
  '@typescript-eslint/prefer-function-type': 'error',
  '@typescript-eslint/prefer-includes': 'error',
  '@typescript-eslint/prefer-nullish-coalescing': [
    'error',
    { ignoreConditionalTests: false, ignoreMixedLogicalExpressions: false }
  ],
  '@typescript-eslint/prefer-optional-chain': 'error',
  '@typescript-eslint/prefer-readonly': 'error',
  '@typescript-eslint/prefer-reduce-type-parameter': 'error',
  '@typescript-eslint/prefer-ts-expect-error': 'error',
  '@typescript-eslint/promise-function-async': 'error',
  '@typescript-eslint/require-array-sort-compare': [
    'error',
    { ignoreStringArrays: true }
  ],
  '@typescript-eslint/restrict-plus-operands': [
    'error',
    { checkCompoundAssignments: true }
  ],
  '@typescript-eslint/return-await': ['error', 'always'],
  '@typescript-eslint/strict-boolean-expressions': [
    'error',
    {
      allowString: false,
      allowNumber: false,
      allowNullableObject: false,
      allowNullableBoolean: false,
      allowNullableString: false,
      allowNullableNumber: false,
      allowAny: false
    }
  ],
  '@typescript-eslint/triple-slash-reference': [
    'error',
    { lib: 'never', path: 'never', types: 'prefer-import' }
  ]
}

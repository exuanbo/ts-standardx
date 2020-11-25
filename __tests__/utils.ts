/* eslint-disable @typescript-eslint/no-var-requires */
const typescriptEslint = require('@typescript-eslint/eslint-plugin')
export const typescriptRules = typescriptEslint.rules
export const recommendedTypescriptRules =
  typescriptEslint.configs.recommended.rules

export const prettierRules = require('eslint-config-prettier/@typescript-eslint')
  .rules

export const isTypescriptRule = (ruleName: string): boolean =>
  ruleName.startsWith('@typescript-eslint/')

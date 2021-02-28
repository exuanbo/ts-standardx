/* eslint-disable @typescript-eslint/no-var-requires */
const typescriptEslint = require('@typescript-eslint/eslint-plugin')
export const typescriptRules = typescriptEslint.rules
export const recommendedTypescriptRules =
  typescriptEslint.configs.recommended.rules
export const typescriptEslintRecommendedRules =
  typescriptEslint.configs['eslint-recommended'].overrides[0].rules

export const eslintConfigPrettierRules = require('eslint-config-prettier').rules

export const isTypescriptRule = (ruleName: string): boolean =>
  ruleName.startsWith('@typescript-eslint/')

export const isRuleContained = (
  ruleName: string,
  rules: Record<string, unknown>
): boolean => Object.keys(rules).some(rule => ruleName === rule)

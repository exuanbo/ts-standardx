import { configs, rules } from '@typescript-eslint/eslint-plugin'

export const typescriptRules = rules
export const recommendedTypescriptRules = configs.recommended.rules!
export const typescriptESLintRecommendedRules = configs['eslint-recommended']
  .overrides![0].rules!

export const isTypescriptRule = (ruleName: string): boolean =>
  ruleName.startsWith('@typescript-eslint/')

export const isRuleContained = (
  ruleName: string,
  rules: Record<string, unknown>
): boolean => Object.keys(rules).some(rule => ruleName === rule)

import { rules, configs } from '@typescript-eslint/eslint-plugin'

export { rules as typescriptRules }
export const typescriptRecommendedRules = configs.recommended.rules!
export const typescriptESLintRecommendedRules = configs['eslint-recommended'].overrides![0].rules!

export const isRuleContained = (ruleName: string, rules: Record<string, unknown>): boolean =>
  Object.keys(rules).some(rule => ruleName === rule)

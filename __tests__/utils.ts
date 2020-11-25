import { configs } from '@typescript-eslint/eslint-plugin'

export const recommendedTypescriptRules = configs.recommended

export const isTypescriptRule = (ruleName: string): boolean =>
  ruleName.startsWith('@typescript-eslint/')

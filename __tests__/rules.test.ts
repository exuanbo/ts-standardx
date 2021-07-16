import eslintConfigPrettier from 'eslint-config-prettier'
import { rules } from '../src/rules'
import { compatRules } from '../src/compatRules'
import {
  typescriptRules,
  typescriptRecommendedRules,
  isTypescriptRule,
  isRuleContained
} from './utils'

const prettierRules = eslintConfigPrettier.rules

describe('rules', () => {
  Object.entries(rules).forEach(([ruleName, ruleOption]) => {
    it('should be typescript rules', () => {
      expect(isTypescriptRule(ruleName)).toBe(true)
    })

    it(`rule ${ruleName} should be in @typescript-eslint`, () => {
      const actualRuleName = ruleName.replace(/^@typescript-eslint\//, '')
      expect(isRuleContained(actualRuleName, typescriptRules)).toBe(true)
    })

    it(`rule ${ruleName} should not be in @typescript-eslint/recommended, or should be changed`, () => {
      const isContained = isRuleContained(ruleName, typescriptRecommendedRules)
      if (isContained) {
        expect(ruleOption).not.toBe(typescriptRecommendedRules[ruleName])
        return
      }
      expect(isContained).toBe(false)
    })

    it(`rule ${ruleName} should not be in prettier/@typescript-eslint`, () => {
      expect(isRuleContained(ruleName, prettierRules)).toBe(false)
    })

    it(`rule ${ruleName} should not be in compatRules`, () => {
      expect(isRuleContained(ruleName, compatRules)).toBe(false)
    })
  })
})

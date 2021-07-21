import { rules as prettierRules } from 'eslint-config-prettier'
import { rules } from '../src/rules'
import { compatRules } from '../src/compatRules'
import { isTypescriptRule } from '../src/utils'
import {
  typescriptRules,
  typescriptRecommendedRules,
  isRuleContained
} from './utils'

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

    it(`rule ${ruleName} should not be in eslint-config-prettier`, () => {
      expect(isRuleContained(ruleName, prettierRules)).toBe(false)
    })

    it(`rule ${ruleName} should not be in compatRules`, () => {
      expect(isRuleContained(ruleName, compatRules)).toBe(false)
    })
  })
})

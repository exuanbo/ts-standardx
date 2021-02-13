import {
  typescriptRules,
  recommendedTypescriptRules,
  prettierRules,
  isTypescriptRule
} from './utils'
import { rules } from '../src/rules'
import { compatRules } from '../src/compatRules'

describe('rules', () => {
  Object.entries(rules).forEach(([ruleName, ruleOption]) => {
    it('should be typescript rules', () => {
      expect(isTypescriptRule(ruleName)).toBe(true)
    })

    it(`rule ${ruleName} should be in @typescript-eslint`, () => {
      const actualRuleName = ruleName.replace(/^@typescript-eslint\//, '')
      const isContained = Object.keys(typescriptRules).some(
        rule => rule === actualRuleName
      )
      expect(isContained).toBe(true)
    })

    it(`rule ${ruleName} should not be in @typescript-eslint/recommended, or should be changed`, () => {
      const isContained = Object.keys(recommendedTypescriptRules).some(
        rule => rule === ruleName
      )
      if (isContained) {
        expect(ruleOption).not.toBe(recommendedTypescriptRules[ruleName])
        return
      }
      expect(isContained).toBe(false)
    })

    it(`rule ${ruleName} should not be in prettier/@typescript-eslint`, () => {
      const isContained = Object.keys(prettierRules).some(
        rule => rule === ruleName
      )
      expect(isContained).toBe(false)
    })

    it(`rule ${ruleName} should not be in compatRules`, () => {
      const isContained = Object.keys(compatRules).some(
        rule => rule === ruleName
      )
      expect(isContained).toBe(false)
    })
  })
})

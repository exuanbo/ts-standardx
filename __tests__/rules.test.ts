import {
  recommendedTypescriptRules,
  typescriptRules,
  isTypescriptRule
} from './utils'
import { rules } from '../src/rules'

describe('rules', () => {
  it('should be typescript rules', () => {
    Object.keys(rules).forEach(ruleName => {
      expect(isTypescriptRule(ruleName)).toBe(true)
    })
  })

  it('should be in eslint-plugin', () => {
    Object.keys(rules).forEach(ruleName => {
      const actualRuleName = ruleName.replace(/^@typescript-eslint\//, '')
      const isContained = Object.keys(typescriptRules).some(
        rule => rule === actualRuleName
      )
      expect(isContained).toBe(true)
    })
  })

  it('should not be in recommended rules, or should be changed', () => {
    Object.entries(rules).forEach(([ruleName, ruleOption]) => {
      const isContained = Object.keys(recommendedTypescriptRules).some(
        rule => rule === ruleName
      )
      if (isContained) {
        expect(ruleOption).not.toBe(recommendedTypescriptRules[ruleName])
      }
    })
  })
})

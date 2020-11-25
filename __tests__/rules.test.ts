import { rules as typescriptRules } from '@typescript-eslint/eslint-plugin'
import { rules as prettierRules } from 'eslint-config-prettier/@typescript-eslint'
import { recommendedTypescriptRules, isTypescriptRule } from './utils'
import { rules } from '../src/rules'
import { compatRules } from '../src/compatRules'

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

  it('should not be in @typescript-eslint/recommended, or should be changed', () => {
    Object.entries(rules).forEach(([ruleName, ruleOption]) => {
      const isContained = Object.keys(recommendedTypescriptRules).some(
        rule => rule === ruleName
      )
      if (isContained) {
        expect(ruleOption).not.toBe(recommendedTypescriptRules[ruleName])
      }
    })
  })

  it('should not be in prettier/@typescript-eslint', () => {
    Object.keys(compatRules).forEach(ruleName => {
      if (isTypescriptRule(ruleName)) {
        const isNotContained = Object.keys(prettierRules).every(
          rule => rule !== ruleName
        )
        expect(isNotContained).toBe(true)
      }
    })
  })

  it('should not be in compatRules', () => {
    Object.keys(rules).forEach(ruleName => {
      const isContained = Object.keys(compatRules).some(
        rule => rule === ruleName
      )
      expect(isContained).toBe(false)
    })
  })
})

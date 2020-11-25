import { rules as typescriptRules } from '@typescript-eslint/eslint-plugin'
import { rules as standardRules } from 'eslint-config-standard/eslintrc.json'
import { rules as prettierRules } from 'eslint-config-prettier/@typescript-eslint'
import { compatRules } from '../src/compatRules'
import { isTypescriptRule, recommendedTypescriptRules } from './utils'

describe('compatRules', () => {
  it('should be in eslint-plugin', () => {
    Object.keys(compatRules).forEach(ruleName => {
      if (isTypescriptRule(ruleName)) {
        const actualRuleName = ruleName.replace(/^@typescript-eslint\//, '')
        const isContained = Object.keys(typescriptRules).some(
          rule => rule === actualRuleName
        )
        expect(isContained).toBe(true)
      }
    })
  })

  it('should not be in @typescript-eslint/recommended', () => {
    Object.keys(compatRules).forEach(ruleName => {
      if (isTypescriptRule(ruleName)) {
        const isNotContained = Object.keys(recommendedTypescriptRules).every(
          rule => rule !== ruleName
        )
        expect(isNotContained).toBe(true)
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

  it('rules in standard should be turned off', () => {
    Object.entries(compatRules).forEach(([ruleName, ruleOption]) => {
      if (!isTypescriptRule(ruleName)) {
        const isContained = Object.keys(standardRules).some(
          rule => rule === ruleName
        )
        expect(isContained).toBe(true)
        expect(ruleOption).toBe('off')
      }
    })
  })
})

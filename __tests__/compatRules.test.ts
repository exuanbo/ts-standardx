import { rules as standardRules } from 'eslint-config-standard/eslintrc.json'
import {
  typescriptRules,
  recommendedTypescriptRules,
  prettierRules,
  isTypescriptRule
} from './utils'
import { compatRules } from '../src/compatRules'

describe('compatRules', () => {
  Object.keys(compatRules).forEach(ruleName => {
    it(`rule ${ruleName} should be in @typescript-eslint`, () => {
      if (isTypescriptRule(ruleName)) {
        const actualRuleName = ruleName.replace(/^@typescript-eslint\//, '')
        const isContained = Object.keys(typescriptRules).some(
          rule => rule === actualRuleName
        )
        expect(isContained).toBe(true)
      }
    })
  })

  Object.keys(compatRules).forEach(ruleName => {
    it(`rule ${ruleName} should not be in @typescript-eslint/recommended`, () => {
      const isNotContained = Object.keys(recommendedTypescriptRules).every(
        rule => rule !== ruleName
      )
      expect(isNotContained).toBe(true)
    })
  })

  Object.keys(compatRules).forEach(ruleName => {
    it(`rule ${ruleName} should not be in prettier/@typescript-eslint`, () => {
      if (isTypescriptRule(ruleName)) {
        const isNotContained = Object.keys(prettierRules).every(
          rule => rule !== ruleName
        )
        expect(isNotContained).toBe(true)
      }
    })
  })

  Object.entries(compatRules).forEach(([ruleName, ruleOption]) => {
    it(`rules ${ruleName} should be turned off`, () => {
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

import { rules as standardRules } from 'eslint-config-standard/eslintrc.json'
import {
  typescriptRules,
  recommendedTypescriptRules,
  prettierRules,
  isTypescriptRule
} from './utils'
import { compatRules } from '../src/compatRules'

const EXCEPTION = ['no-unused-vars']

const getActualRuleName = (ruleName: string): string =>
  ruleName.replace(/^@typescript-eslint\//, '')

describe('compatRules', () => {
  Object.entries(compatRules).forEach(([ruleName, ruleOption]) => {
    if (isTypescriptRule(ruleName)) {
      it(`rule ${ruleName} should be in @typescript-eslint`, () => {
        const actualRuleName = getActualRuleName(ruleName)
        const isContained = Object.keys(typescriptRules).some(
          rule => rule === actualRuleName
        )
        expect(isContained).toBe(true)
      })

      const actualRuleName = getActualRuleName(ruleName)
      if (!EXCEPTION.some(exceptionRule => exceptionRule === actualRuleName)) {
        it(`rule ${ruleName} should not be in @typescript-eslint/recommended`, () => {
          const isNotContained = Object.keys(recommendedTypescriptRules).every(
            rule => rule !== ruleName
          )
          expect(isNotContained).toBe(true)
        })
      }

      it(`rule ${ruleName} should not be in prettier/@typescript-eslint`, () => {
        const isNotContained = Object.keys(prettierRules).every(
          rule => rule !== ruleName
        )
        expect(isNotContained).toBe(true)
      })
    } else {
      it(`rules ${ruleName} should be turned off, or should be changed`, () => {
        const isContained = Object.keys(standardRules).some(
          rule => rule === ruleName
        )
        expect(isContained).toBe(true)
        expect(
          ruleOption === 'off' ||
            ruleOption !== standardRules[ruleName as keyof typeof standardRules]
        ).toBe(true)
      })
    }
  })
})

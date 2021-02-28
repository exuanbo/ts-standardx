import { rules as standardRules } from 'eslint-config-standard/eslintrc.json'
import { compatRules } from '../src/compatRules'
import {
  typescriptRules,
  recommendedTypescriptRules,
  typescriptEslintRecommendedRules,
  eslintConfigPrettierRules,
  isTypescriptRule,
  isRuleContained
} from './utils'

const EXCEPTION = ['no-unused-vars']

const getActualRuleName = (ruleName: string): string =>
  ruleName.replace(/^@typescript-eslint\//, '')

describe('compatRules', () => {
  Object.entries(compatRules).forEach(([ruleName, ruleOption]) => {
    if (isTypescriptRule(ruleName)) {
      it(`rule ${ruleName} should be in @typescript-eslint`, () => {
        const actualRuleName = getActualRuleName(ruleName)
        expect(isRuleContained(actualRuleName, typescriptRules)).toBe(true)
      })

      const actualRuleName = getActualRuleName(ruleName)
      if (!EXCEPTION.some(exceptionRule => exceptionRule === actualRuleName)) {
        it(`rule ${ruleName} should not be in @typescript-eslint/recommended`, () => {
          expect(isRuleContained(ruleName, recommendedTypescriptRules)).toBe(
            false
          )
        })
      }

      it(`rule ${ruleName} should not be in eslint-config-prettier`, () => {
        expect(isRuleContained(ruleName, eslintConfigPrettierRules)).toBe(false)
      })
    } else {
      it(`eslint rule ${ruleName} should not be in @typescript-eslint/eslint-recommended`, () => {
        expect(
          isRuleContained(ruleName, typescriptEslintRecommendedRules)
        ).toBe(false)
      })

      it(`eslint rule ${ruleName} should be turned off, or should be changed`, () => {
        expect(isRuleContained(ruleName, standardRules)).toBe(true)
        expect(
          ruleOption === 'off' ||
            ruleOption !== standardRules[ruleName as keyof typeof standardRules]
        ).toBe(true)
      })
    }
  })
})

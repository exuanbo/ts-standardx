import { rules as standardRules } from 'eslint-config-standard/eslintrc.json'
import { rules as prettierRules } from 'eslint-config-prettier'
import { compatRules } from '../src/compatRules'
import { isTypescriptRule } from '../src/utils'
import {
  typescriptRules,
  typescriptRecommendedRules,
  typescriptESLintRecommendedRules,
  isRuleContained
} from './utils'

const EXCEPTION = ['no-unused-vars']

describe('compatRules', () => {
  Object.entries(compatRules).forEach(([ruleName, ruleEntry]) => {
    if (isTypescriptRule(ruleName)) {
      const actualRuleName = ruleName.replace(/^@typescript-eslint\//, '')

      it(`rule ${ruleName} should be in @typescript-eslint`, () => {
        expect(isRuleContained(actualRuleName, typescriptRules)).toBe(true)
      })

      if (!EXCEPTION.some(exceptionRule => exceptionRule === actualRuleName)) {
        it(`rule ${ruleName} should not be in @typescript-eslint/recommended`, () => {
          expect(isRuleContained(ruleName, typescriptRecommendedRules)).toBe(false)
        })
      }

      it(`rule ${ruleName} should not be in eslint-config-prettier, or should be changed`, () => {
        if (isRuleContained(ruleName, prettierRules)) {
          expect(ruleEntry !== prettierRules[ruleName])
        }
      })
    } else {
      it(`eslint rule ${ruleName} should not be in @typescript-eslint/eslint-recommended`, () => {
        expect(isRuleContained(ruleName, typescriptESLintRecommendedRules)).toBe(false)
      })

      it(`eslint rule ${ruleName} should be turned off, or should be changed`, () => {
        expect(isRuleContained(ruleName, standardRules)).toBe(true)
        expect(
          ruleEntry === 'off' || ruleEntry !== standardRules[ruleName as keyof typeof standardRules]
        ).toBe(true)
      })
    }
  })
})

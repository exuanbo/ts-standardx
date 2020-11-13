/* eslint-disable @typescript-eslint/no-var-requires */
import { getEslintrc } from '../src/utils'

describe('getEslintrc', () => {
  it('should return eslintrc', () => {
    const eslintrc = getEslintrc()
    expect(eslintrc).toEqual(require('../.eslintrc.js'))
  })
})

import { getEslintrc } from '../src/utils'

describe('getEslintrc', () => {
  it('should return eslintrc', () => {
    const eslintrc = getEslintrc()
    /* eslint-disable-next-line @typescript-eslint/no-var-requires */
    expect(eslintrc).toStrictEqual(require('../.eslintrc.js'))
  })
})

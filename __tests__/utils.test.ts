import { getEslintrc, isModuleAvailable } from '../src/utils'

describe('isModuleAvailable', () => {
  it('should return true if module is available', () => {
    const res = isModuleAvailable('typescript')
    expect(res).toBe(true)
  })

  it('should return false if module is not available', () => {
    const res = isModuleAvailable('no_such_module')
    expect(res).toBe(false)
  })
})

describe('getEslintrc', () => {
  it('should return eslintrc', () => {
    const res = getEslintrc()
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    expect(res).toStrictEqual(require('../.eslintrc.js'))
  })

  it('should return undefined if not found', () => {
    process.chdir(__dirname)
    const res = getEslintrc()
    expect(res).toBe(undefined)
  })
})

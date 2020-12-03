import { isModuleAvailable } from '../src/utils'

describe('isModuleAvailable', () => {
  it('should return true if module installed', () => {
    const res = isModuleAvailable('typescript')
    expect(res).toBe(true)
  })

  it('should return false if module not installed', () => {
    const res = isModuleAvailable('standard')
    expect(res).toBe(false)
  })
})

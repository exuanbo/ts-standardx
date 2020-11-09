import path from 'path'
import { getEslintrc } from '../src/utils'

const cwd = process.cwd()

describe('getEslintrc', () => {
  it('should return eslintrc path', () => {
    const eslintrc = getEslintrc()
    expect(eslintrc).toBe(path.join(cwd, '.eslintrc.js'))
  })
})

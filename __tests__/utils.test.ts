import fs from 'fs'
import path from 'path'
import { getEslintrc } from '../src/utils'

describe('getEslintrc', () => {
  it('should return eslintrc', () => {
    const res = getEslintrc()
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    expect(res).toStrictEqual(require('../.eslintrc.js'))
  })

  it('should return undefined if not found', () => {
    const FILE_NAME = '.eslintrc.js'
    const oldPath = path.join(process.cwd(), FILE_NAME)
    const newPath = path.join(__dirname, FILE_NAME)

    fs.renameSync(oldPath, newPath)

    const res = getEslintrc()
    expect(res).toBe(undefined)

    fs.renameSync(newPath, oldPath)
  })
})

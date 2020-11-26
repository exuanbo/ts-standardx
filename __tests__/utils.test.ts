import fs from 'fs'
import path from 'path'
import { getEslintrc } from '../src/utils'

describe('getEslintrc', () => {
  it('should return eslintrc', () => {
    const eslintrc = getEslintrc()
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    expect(eslintrc).toStrictEqual(require('../.eslintrc.js'))
  })

  describe('if not found', () => {
    const grandParentPath = path.join(process.cwd(), '../..')
    const tmpDirPath = path.join(grandParentPath, 'node_modules')
    const tmpFilePath = path.join(grandParentPath, 'package.json')

    beforeAll(() => {
      try {
        fs.mkdirSync(tmpDirPath)
        if (fs.existsSync(tmpFilePath)) {
          throw new Error()
        }
        fs.writeFileSync(tmpFilePath, '')
      } catch {
        throw new Error(
          'Failed to create temp files. Feel free to comment out this test.'
        )
      }
    })

    afterAll(() => {
      fs.rmdirSync(tmpDirPath)
      fs.rmSync(tmpFilePath)
    })

    it('should return undefined', () => {
      const eslintrc = getEslintrc()
      expect(eslintrc).toBe(undefined)
    })
  })
})

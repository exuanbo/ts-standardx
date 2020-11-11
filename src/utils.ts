/* eslint-disable @typescript-eslint/no-var-requires */
import fs from 'fs'
import path from 'path'
import { getRootPath } from 'standard-engine-ts'

const rootPath = getRootPath()

export const getEslintrc = (): Record<string, unknown> | undefined => {
  type ExcludesUndefined = <T>(s: T | undefined) => s is T

  const eslintrcList = ['.eslintrc.js', '.eslintrc.json', '.eslintrc']
    .map(file => {
      const filePath = path.join(rootPath, file)
      return (fs.existsSync(filePath) && filePath) || undefined
    })
    .filter((Boolean as unknown) as ExcludesUndefined)

  if (eslintrcList.length > 0) {
    const eslintrc = require(eslintrcList[0])
    if (JSON.stringify(eslintrc).search(/ts-standardx\/\.eslintrc\.js/) < 0) {
      return eslintrc
    }
  }
  return undefined
}

import fs from 'fs'
import path from 'path'
import { getRootPath } from 'standard-engine-ts'

const rootPath = getRootPath()

export const getEslintrc = (): string | undefined => {
  type ExcludesUndefined = <T>(s: T | undefined) => s is T

  const eslintrc = ['.eslintrc.js', '.eslintrc.json', '.eslintrc']
    .map(file => {
      const filePath = path.join(rootPath, file)
      return (fs.existsSync(filePath) && filePath) || undefined
    })
    .filter((Boolean as unknown) as ExcludesUndefined)

  if (eslintrc.length > 0) {
    return eslintrc[0]
  }
}

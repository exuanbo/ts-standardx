import fs from 'fs'
import path from 'path'
import { Linter } from 'eslint'
import { getRootPath } from 'standard-engine-ts'

export const getEslintrc = (): Linter.BaseConfig | undefined => {
  const rootPath = getRootPath()
  for (const eslintrc of ['.eslintrc.js', '.eslintrc.json', '.eslintrc']) {
    const filePath = path.join(rootPath, eslintrc)
    if (fs.existsSync(filePath)) {
      return require(filePath)
    }
  }
  return undefined
}

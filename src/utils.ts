import fs from 'fs'
import path from 'path'
import { Linter } from 'eslint'
import { getRootPath } from 'standard-engine-ts'

const excludeUndefined = <T>(item: T | undefined): item is T =>
  item !== undefined

export const getEslintrc = (): Linter.BaseConfig | undefined => {
  const rootPath = getRootPath()

  const eslintrcList = ['.eslintrc.js', '.eslintrc.json', '.eslintrc']
    .map(file => {
      const filePath = path.join(rootPath, file)
      return (fs.existsSync(filePath) && filePath) || undefined
    })
    .filter(excludeUndefined)

  if (eslintrcList.length > 0) {
    return JSON.parse(
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      JSON.stringify(require(eslintrcList[0])).replace(
        "require('ts-standardx/.eslintrc.js')",
        '{}'
      )
    )
  }
  return undefined
}

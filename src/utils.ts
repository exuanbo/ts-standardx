import fs from 'fs'
import path from 'path'
import { getRootPath } from 'standard-engine-ts'

const rootPath = getRootPath()

const excludeUndefined = <T>(item: T | undefined): item is T =>
  item !== undefined

export const getEslintrc = (): Record<string, unknown> | undefined => {
  const eslintrcList = ['.eslintrc.js', '.eslintrc.json', '.eslintrc']
    .map(file => {
      const filePath = path.join(rootPath, file)
      return (fs.existsSync(filePath) && filePath) || undefined
    })
    .filter(excludeUndefined)

  if (eslintrcList.length > 0) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-assignment
    const eslintrc = require(eslintrcList[0])
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return JSON.parse(
      JSON.stringify(eslintrc).replace(
        "require('ts-standardx/.eslintrc.js')",
        '{}'
      )
    )
  }
  return undefined
}

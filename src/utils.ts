import fs from 'fs'
import path from 'path'
import { Linter } from 'eslint'

export const isModuleAvailable = (path: string): boolean => {
  try {
    require.resolve(path)
    return true
  } catch {
    return false
  }
}

const excludeUndefined = <T>(item: T | undefined): item is T =>
  item !== undefined

export const getEslintrc = (): Linter.BaseConfig | undefined => {
  const eslintrcArr = ['.eslintrc.js', '.eslintrc.json', '.eslintrc']
    .map(file => {
      const filePath = path.join(process.cwd(), file)
      return (fs.existsSync(filePath) && filePath) || undefined
    })
    .filter(excludeUndefined)

  if (eslintrcArr.length > 0) {
    return JSON.parse(
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      JSON.stringify(require(eslintrcArr[0])).replace(
        "require('ts-standardx/.eslintrc.js')",
        '{}'
      )
    )
  }
  return undefined
}

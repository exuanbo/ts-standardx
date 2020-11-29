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

  return eslintrcArr.length > 0 ? require(eslintrcArr[0]) : undefined
}

export const isModuleAvailable = (path: string): boolean => {
  try {
    require.resolve(path)
    return true
  } catch {
    return false
  }
}

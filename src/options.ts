import path from 'path'
import eslint from 'eslint'
import { ProvidedOptions } from 'standard-engine-ts'
import { name, version, bugs, homepage, dependencies } from '../package.json'

const ENGINE = 'standard-engine-ts'

export const opts: ProvidedOptions = {
  cmd: name,
  version: `${version} (${ENGINE} v${dependencies[ENGINE]})`,
  tagline: 'TypeScript Standard Style',
  homepage: homepage,
  bugs: bugs.url,
  eslint,
  extensions: ['.ts'],
  useGitIgnore: true,
  configFile: path.join(__dirname, '..', '.eslintrc.js')
}

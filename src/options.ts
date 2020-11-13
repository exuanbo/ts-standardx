import path from 'path'
import eslint from 'eslint'
import { ProvidedOptions } from 'standard-engine-ts'
import { getEslintrc } from './utils'
import {
  name,
  version,
  description,
  bugs,
  homepage,
  dependencies
} from '../package.json'

const ENGINE = 'standard-engine-ts'

const eslintrc = getEslintrc()

export const opts: ProvidedOptions = {
  cmd: name,
  version: `${version} (${ENGINE} v${dependencies[ENGINE]})`,
  tagline: description,
  homepage: homepage,
  bugs: bugs.url,
  eslint,
  eslintOptions: {
    baseConfig: eslintrc
  },
  extensions: ['.ts', '.tsx'],
  useGitIgnore: true,
  configFile: path.join(__dirname, '../.eslintrc.js')
}

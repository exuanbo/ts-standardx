import path from 'path'
import eslint from 'eslint'
import { ProvidedOptions } from 'standard-engine-ts'
import {
  name,
  version,
  description,
  bugs,
  homepage,
  dependencies
} from '../package.json'

const ENGINE = 'standard-engine-ts'

export const opts: ProvidedOptions = {
  cmd: name,
  version: `${version} (${ENGINE} v${dependencies[ENGINE]})`,
  tagline: description,
  homepage: homepage,
  bugs: bugs.url,
  eslint,
  extensions: ['.ts', '.tsx'],
  configFile: path.join(__dirname, '../.eslintrc.js')
}

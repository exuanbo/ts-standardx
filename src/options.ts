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

export const options: ProvidedOptions = {
  cmd: name,
  version: `${version} (${ENGINE} v${dependencies[ENGINE]})`,
  tagline: description,
  bugs: bugs.url,
  homepage: homepage,
  eslint,
  extensions: ['.ts', '.tsx'],
  configFile: path.join(__dirname, '../.eslintrc.js')
}

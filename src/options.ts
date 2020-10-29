import path from 'path'
import eslint from 'eslint'
import { LinterOptions } from 'standard-engine'
import { version, bugs, homepage, dependencies } from '../package.json'

const NAME = 'ts-standardx'
const ENGINE = 'standard-engine'

export const opts: LinterOptions = {
  version: `${NAME} v${version} (${ENGINE} v${dependencies[ENGINE]})`,
  homepage: homepage,
  bugs: bugs.url,
  eslint,
  cmd: NAME,
  tagline: 'TypeScript Standard Style',
  eslintConfig: {
    configFile: path.join(__dirname, '..', '.eslintrc.js'),
    useEslintrc: true
  }
}

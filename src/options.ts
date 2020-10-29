import path from 'path'
import eslint from 'eslint'
import { LinterOptions } from 'standard-engine'
import { version, bugs, homepage, dependencies } from '../package.json'

const NAME = 'ts-standardx'
const ENGINE = 'standard-engine'
const EXTENSIONS = ['ts', 'tsx', '.js', '.jsx', '.mjs', '.cjs']

interface Options extends LinterOptions {
  eslintConfig: {
    configFile: string
    extensions: string[]
    useEslintrc: boolean
  }
}

export const opts: Options = {
  version: `${NAME} v${version} (${ENGINE} v${dependencies[ENGINE]})`,
  homepage: homepage,
  bugs: bugs.url,
  eslint,
  cmd: NAME,
  tagline: 'TypeScript Standard Style',
  eslintConfig: {
    configFile: path.join(__dirname, '..', '.eslintrc.js'),
    extensions: EXTENSIONS,
    useEslintrc: true
  }
}

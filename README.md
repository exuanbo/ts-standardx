# ts-standardx

> Yet another customizable Standard for TypeScript.

[![npm](https://img.shields.io/npm/v/ts-standardx.svg?style=flat-square)](https://www.npmjs.com/package/ts-standardx)
[![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/ts-standardx?style=flat-square)](https://libraries.io/npm/ts-standardx)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen?style=flat-square)](https://renovatebot.com/)

## Description

Todo

## Install

```sh
npm install --save-dev ts-standardx
```

## CLI

Lint using ESLint.

```sh
npx ts-standardx
```

Fix and format using ESLint and Prettier.

```sh
npx ts-standardx --fix
```

### Help

```
ts-standardx: Yet another customizable Standard for TypeScript. (https://github.com/exuanbo/ts-standardx#readme)

usage: ts-standardx <flags> [FILES...]

  If FILES is omitted, all source files (*.js, *.jsx, *.mjs, *.cjs, *.ts)
  in the current working directory will be checked recursively.

  Certain paths dist/, coverage/, files/folders that begin with '.'
  like .git/ and paths in the project's root .gitignore are ignored by default.

Basic:
  --fix          Automatically fix problems
  --verbose      Show rule names for errors (to ignore specific rules)
  -v, --version  Show current version
  -h, --help     Show usage information

Advanced:
  --stdin        Read file text from stdin
  --ext          Specify JavaScript file extensions
  --global       Declare global variable
  --plugin       Use custom eslint plugin
  --env          Use custom eslint environment
  --parser       Use custom js parser (e.g. babel-eslint)
```

## API

```ts
// index.d.ts

import { ProvidedOptions, Linter, CLI } from 'standard-engine-ts'

declare const opts: ProvidedOptions

declare const linter: Linter
declare const cli: CLI

export { cli, linter, opts }
```

## IDE extension

Install the official `eslint` extension, then add a config file as example below.

```js
// .eslintrc.js

const { mergeObj } = require('standard-engine-ts')
const baseConfig = require('ts-standardx/.eslintrc.js')

module.exports = mergeObj(baseConfig, {
  // Your other customizations
})
```

## Details

This package includes:

- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- eslint
- eslint-config-prettier
- eslint-config-standard
- eslint-config-standard-jsx
- eslint-config-standard-with-typescript
- eslint-plugin-import
- eslint-plugin-node
- eslint-plugin-prettier
- eslint-plugin-promise
- eslint-plugin-react
- eslint-plugin-standard
- prettier
- [standard-engine-ts](https://github.com/exuanbo/standard-engine-ts#readme)

```js
// .eslintrc.js

const fs = require('fs')
const path = require('path')
const { getRootPath } = require('standard-engine-ts')

const getTsconfig = () => {
  const rootPath = getRootPath()
  const filePath = path.join(rootPath, 'tsconfig.json')
  return (fs.existsSync(filePath) && filePath) || undefined
}

module.exports = {
  extends: [
    'standard',
    'standard-jsx',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/standard'
  ],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'standard-with-typescript',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier/@typescript-eslint'
      ],
      parserOptions: {
        project: getTsconfig()
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', require('./.prettierrc.js')]
  }
}
```

```js
// .prettierrc.js

module.exports = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  jsxBracketSameLine: true,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none'
}
```

## Todo

- [ ] Unit testing
- [ ] Detailed Documentation
- [ ] Make Output colorful and pretty
- [ ] Better intergration with Prettier

## License

[MIT License](https://github.com/exuanbo/ts-standardx/blob/main/LICENSE) © 2020 [Exuanbo](https://github.com/exuanbo)

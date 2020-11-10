# ts-standardx [WIP]

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

Todo

## Details

This package includes:

- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- eslint
- eslint-config-prettier
- eslint-config-standard
- eslint-config-standard-with-typescript
- eslint-plugin-import
- eslint-plugin-node
- eslint-plugin-prettier
- eslint-plugin-promise
- eslint-plugin-standard
- prettier
- [standard-engine-ts](https://github.com/exuanbo/standard-engine-ts#readme)

```js
// .eslintrc.js

const { existsSync } = require('fs')
const { join } = require('path')
const rootPath = require('standard-engine-ts').getRootPath()

const getTsconfig = () => {
  const filePath = join(rootPath, 'tsconfig.json')
  return (existsSync(filePath) && filePath) || undefined
}

module.exports = {
  extends: ['standard', 'plugin:prettier/recommended', 'prettier/standard'],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', require('./.prettierrc.js')]
  },
  overrides: [
    {
      files: ['**/*.ts'],
      extends: ['standard-with-typescript', 'prettier/@typescript-eslint'],
      parserOptions: {
        project: getTsconfig() || './tsconfig.json'
      }
    }
  ]
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
- [ ] Better intergration with Prettier

## License

[MIT License](https://github.com/exuanbo/ts-standardx/blob/main/LICENSE) © 2020 [Exuanbo](https://github.com/exuanbo)

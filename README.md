<p id="logo" align="center">
<a href="#logo"><img src="./logo.svg"></a>
</p>

<p align="center">
> Yet another customizable linter for TypeScript and JavaScript.
</p>

<p align="center">
<a href="https://www.npmjs.com/package/ts-standardx">
<img src="https://img.shields.io/npm/v/ts-standardx">
</a>
<a href="https://libraries.io/npm/ts-standardx">
<img src="https://img.shields.io/librariesio/release/npm/ts-standardx?label=deps">
</a>
</p>

## 🚀 Features

Todo

## 💾 Install

```sh
npm install --save-dev ts-standardx
```

## 🛠 IDE extension

Install the official `eslint` extension, then add a config file in the project root directory as example below. Your custom config will be [deeply merged](https://github.com/exuanbo/standard-engine-ts/blob/main/src/utils.ts#L83) into the base `.eslintrc.js` (See [#Details](#eslintrcjs)).

```js
// .eslintrc.js

const { mergeObj } = require('standard-engine-ts')
const baseConfig = require('ts-standardx/.eslintrc.js')

module.exports = mergeObj(baseConfig, {
  // Your custom config
})
```

If you don't like being blamed while coding 🤯, there is no need to use `mergeObj(baseConfig, {})`. Just write your ESLint config as usual and it will be merged automatically.

## 🤖 CLI

```sh
$ npx ts-standardx
```

To enable auto fix and format, use `--fix`.

```sh
$ npx ts-standardx --fix
```

To lint text from stdin, use `-` or `--stdin`.

```sh
$ echo "const salute = ( ) => 'hi'" | npx ts-standardx -
```

<details><summary style="margin-left:0.125em;">output</summary>
<p>

```
ts-standardx: Yet another customizable Standard for TypeScript. (https://github.com/exuanbo/ts-standardx#readme)

  Run `ts-standardx --fix` to automatically fix some problems.

  <text>:1:19: Delete `·`
```

</p>
</details>

<br>

Add `--fix` to output fixed text.

```sh
$ echo "const salute = ( ) => 'hi'" | npx ts-standardx - --fix
```

<details><summary style="margin-left:0.125em;">output</summary>
<p>

```
export const a = () => 'hello'
```

</p>
</details>

### --help

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

## ⌨️ API

```ts
// index.d.ts

import { ProvidedOptions, Linter, CLI } from 'standard-engine-ts'

declare const opts: ProvidedOptions

declare const linter: Linter
declare const cli: CLI

export { cli, linter, opts }
```

## 🔎 Details

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

### .eslintrc.js

```js
const fs = require('fs')
const path = require('path')
const { getRootPath } = require('standard-engine-ts')

const getTsconfig = () => {
  const filePath = path.join(getRootPath(), 'tsconfig.json')
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
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: getTsconfig()
      }
    }
  ],
  parser: 'espree',
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', require('./.prettierrc.js')]
  }
}
```

### .prettierrc.js

```js
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

## 🤔 Why

Todo

## 📃 Todo

- [ ] Unit testing
- [ ] Documentation
- [ ] Prettier output
- [ ] Better intergration with Prettier

## License

[MIT License](https://github.com/exuanbo/ts-standardx/blob/main/LICENSE) © 2020 [Exuanbo](https://github.com/exuanbo)

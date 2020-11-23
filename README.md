<h1 id="logo" align="center">
<a href="#logo"><img src="./logo.svg"></a>
</h1>

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
  /* Your custom config */
})

// Or simply use the default config

module.exports = require('ts-standardx/.eslintrc.js')
```

If you don't like being blamed while coding 🤯, there is no need to export `require('ts-standardx/.eslintrc.js')`. Just write your ESLint config as usual and it will be merged automatically.

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

<details><summary>output</summary>
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

<details><summary>output</summary>
<p>

```
export const a = () => 'hello'
```

</p>
</details>

### --help

```
ts-standardx: Yet another customizable linter for TypeScript and JavaScript. (https://github.com/exuanbo/ts-standardx#readme)

Usage: ts-standardx <flags> [FILES...]

  If FILES is omitted, all source files (*.ts, *.tsx, *.js, *.jsx, *.mjs, *.cjs)
  in the current working directory will be checked recursively.

  By default, files/folders that begin with '.' like .eslintrc .cache/
  and paths in the project's root .gitignore are automatically ignored.

Basic:
  --fix                Automatically fix problems
  --verbose            Show rule names for errors (to ignore specific rules)

Config:
  --env                Use custom eslint environment
  --ext                Specify file extensions
  --global             Declare global variable
  --parser             Use custom parser (e.g. babel-eslint)
  --plugin             Use custom eslint plugin

Input:
  --stdin              Read file text from stdin
  --disable-gitignore  Disable use of .gitignore by default

Misc:
  -h, --help           Show usage information
  -v, --version        Show current version
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
- eslint-plugin-import
- eslint-plugin-node
- eslint-plugin-prettier
- eslint-plugin-promise
- eslint-plugin-react
- prettier
- [standard-engine-ts](https://github.com/exuanbo/standard-engine-ts#readme)

### .eslintrc.js

```js
const path = require('path')

module.exports = {
  extends: [
    'plugin:react/recommended',
    'standard',
    'standard-jsx',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/standard'
  ],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier/@typescript-eslint'
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: path.join(process.cwd(), 'tsconfig.json')
      }
    }
  ],
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

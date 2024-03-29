# [![ts-standardx](https://raw.githubusercontent.com/exuanbo/ts-standardx/main/logo.svg)](https://github.com/exuanbo/ts-standardx)

> Yet another configurable linter for TypeScript and JavaScript.

[![npm](https://img.shields.io/npm/v/ts-standardx.svg)](https://www.npmjs.com/package/ts-standardx)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/exuanbo/ts-standardx/Node.js%20CI/main.svg)](https://github.com/exuanbo/ts-standardx/actions?query=workflow%3A%22Node.js+CI%22)
[![Codecov branch](https://img.shields.io/codecov/c/gh/exuanbo/ts-standardx/main.svg?token=D9AA8C1ZS2)](https://codecov.io/gh/exuanbo/ts-standardx)
[![libera manifesto](https://img.shields.io/badge/libera-manifesto-lightgrey.svg)](https://liberamanifesto.com)

## 🚀 Features

Todo

## 💾 Install

```sh
npm install --save-dev ts-standardx
```

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
$ echo "const greet = ( ) => 'hi'" | npx ts-standardx -
```

<details><summary>output</summary>
<p>

```
<text>:1:7
  error  'greet' is assigned a value but never used.  no-unused-vars

<text>:1:17
  error  Delete `·`  prettier/prettier

Run `ts-standardx --fix` to automatically fix some problems.
```

</p>
</details>

<br>

Add `--fix` to output fixed text.

```sh
$ echo "const greet = ( ) => 'hi'" | npx ts-standardx - --fix
```

<details><summary>output</summary>
<p>

```
const greet = () => 'hi'
```

</p>
</details>

### --help

```
ts-standardx: Yet another configurable linter for TypeScript and JavaScript. (https://github.com/exuanbo/ts-standardx#readme)

Usage: ts-standardx <flags> [FILES...]

  If FILES is omitted, all source files (*.ts, *.tsx, *.js, *.jsx, *.mjs, *.cjs)
  in the current working directory will be checked recursively.

  By default, files/folders that begin with '.' like .eslintrc .cache/ and
  paths in .gitignore are automatically ignored.

Basic:
  --fix                Automatically fix problems

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

<details>
<summary>Check</summary>
<p>

```ts
// index.d.ts

import {
  ProvidedOptions,
  Linter as __Linter,
  CLI as __CLI
} from 'standard-engine-ts'

declare const options: ProvidedOptions

declare class Linter extends __Linter {
  constructor(customOptions?: ProvidedOptions)
}
declare class CLI extends __CLI {
  constructor(customOptions?: ProvidedOptions)
}

export { CLI, Linter, options }
```

</p>
</details>

## ⚙️ Configuration

`ts-standardx` uses `.eslintrc*` from the current working directory.

Note that rules for TypeScript need to be placed in `overrides` as example below.

```js
// .eslintrc.js

module.exports = {
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off'
      }
    }
  ]
}
```

`.prettierrc*` will be read from the current directory, but these options

- `semi`
- `singleQuote`
- `trailingComma`
- `bracketSameLine`
- `arrowParens`

will not take effect. The only way to change them is setting in `.eslintrc*` as example below.

```js
// .eslintrc.js

module.exports = {
  rules: {
    'prettier/prettier': ['error', { ...options }]
  }
}
```

### Editor extension

Add the [default config](#eslintrcts) to `extends` to use the official ESLint extension.

```js
// .eslintrc.js

module.exports = {
  extends: ['./node_modules/ts-standardx/.eslintrc.js']
}
```

<details>
<summary>But wait a second...</summary>
<p>

"So why can't I use `npx eslint .` directly?" Yes, you can :p

</p>
</details>

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

### eslintrc.ts

<details>
<summary>Check</summary>
<p>

```ts
import type { Linter } from 'eslint'
import { rules } from './rules'
import { prettierCompatRules, compatRules, prettierTypescriptCompatRules } from './compatRules'
import { isModuleAvailable } from './utils'

const PRETTIER_STANDARD = {
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  bracketSameLine: true,
  arrowParens: 'avoid'
}

const eslintrc: Linter.BaseConfig = {
  extends: ['standard', 'standard-jsx', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', PRETTIER_STANDARD],
    ...prettierCompatRules
  },
  overrides: isModuleAvailable('typescript')
    ? [
        {
          files: ['**/*.ts', '**/*.tsx'],
          extends: ['plugin:@typescript-eslint/recommended'],
          rules: {
            ...rules,
            ...compatRules,
            ...prettierTypescriptCompatRules
          }
        }
      ]
    : undefined
}

export default eslintrc
```

</p>
</details>

## 🤔 Why

Todo

## 📃 Todo

- [ ] Document
- [ ] Allow specify `parserOptions.project`
- [ ] Remove `eslint-config-standard-jsx`

## License

[MIT License](https://github.com/exuanbo/ts-standardx/blob/main/LICENSE) © 2021 [Exuanbo](https://github.com/exuanbo)

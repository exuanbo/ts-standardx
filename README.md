# ts-standardx [WIP]

> Yet another customizable Standard for TypeScript.

[![npm](https://img.shields.io/npm/v/ts-standardx.svg?style=flat-square)](https://www.npmjs.com/package/ts-standardx)
[![David](https://img.shields.io/david/exuanbo/ts-standardx.svg?style=flat-square)](https://david-dm.org/exuanbo/ts-standardx)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen?style=flat-square)](https://renovatebot.com/)

## Install

```sh
npm install --save-dev ts-standardx
```

## Usage

```sh
$ npx ts-standardx --help
```

```
ts-standardx: TypeScript Standard Style (https://github.com/exuanbo/ts-standardx#readme)

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

## Todo

- [ ] Unit testing
- [ ] Documentation

## License

[MIT License](https://github.com/exuanbo/ts-standardx/blob/main/LICENSE) © 2020 [Exuanbo](https://github.com/exuanbo)

# ts-standardx [WIP]


[![npm](https://img.shields.io/npm/v/ts-standardx.svg?style=flat-square)](https://www.npmjs.com/package/ts-standardx)
[![David](https://img.shields.io/david/exuanbo/ts-standardx.svg?style=flat-square)](https://david-dm.org/exuanbo/ts-standardx)

## Install

```sh
npm install --save-dev ts-standardx
```

## Usage

```sh
$ npx ts-standardx --help
```

```
ts-standardx - TypeScript Standard Style (https://github.com/exuanbo/ts-standardx#readme)

Usage:
    ts-standardx <flags> [FILES...]

    If FILES is omitted, all JavaScript source files (*.js, *.jsx, *.mjs, *.cjs)
    in the current working directory are checked, recursively.

    Certain paths (node_modules/, coverage/, vendor/, *.min.js, and
    files/folders that begin with '.' like .git/) are automatically ignored.

    Paths in a project's root .gitignore file are also automatically ignored.

Flags:
        --fix       Automatically fix problems
    -v, --verbose   Show rule names for errors (to ignore specific rules)
        --version   Show current version
    -h, --help      Show usage information

Flags (advanced):
        --stdin     Read file text from stdin
        --ext       Specify JavaScript file extensions
        --global    Declare global variable
        --plugin    Use custom eslint plugin
        --env       Use custom eslint environment
        --parser    Use custom js parser (e.g. babel-eslint)
```

## License

[MIT License](https://github.com/exuanbo/ts-standardx/blob/main/LICENSE) © 2020 [Exuanbo](https://github.com/exuanbo)

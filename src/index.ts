import type { ProvidedOptions } from 'standard-engine-ts'
import {
  Options,
  Linter as _Linter,
  CLI as _CLI,
  mergeConfig
} from 'standard-engine-ts'
import { options } from './options'

export { options }

export class Linter extends _Linter {
  constructor(customOptions?: ProvidedOptions) {
    const { ESLint, eslintOptions } = new Options(
      mergeConfig(options, customOptions)
    )
    super(ESLint, eslintOptions)
  }
}

export class CLI extends _CLI {
  constructor(customOptions?: ProvidedOptions) {
    super(mergeConfig(options, customOptions))
  }
}

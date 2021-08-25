import type { ProvidedOptions } from 'standard-engine-ts'
import { Options, Linter as __Linter, CLI as __CLI, mergeConfig } from 'standard-engine-ts'
import { options } from './options'

export { options }

export class Linter extends __Linter {
  constructor(customOptions?: ProvidedOptions) {
    const { ESLint, eslintOptions } = new Options(mergeConfig(options, customOptions))
    super(ESLint, eslintOptions)
  }
}

export class CLI extends __CLI {
  constructor(customOptions?: ProvidedOptions) {
    super(mergeConfig(options, customOptions))
  }
}

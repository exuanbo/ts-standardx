import {
  ProvidedOptions,
  Linter as StandardLinter,
  CLI as StandardCLI,
  mergeConfig
} from 'standard-engine-ts'
import { options } from './options'

export { options }

export class Linter extends StandardLinter {
  constructor(customOptions?: ProvidedOptions) {
    super(mergeConfig(options, customOptions))
  }
}

export class CLI extends StandardCLI {
  constructor(customOptions?: ProvidedOptions) {
    super(mergeConfig(options, customOptions))
  }
}

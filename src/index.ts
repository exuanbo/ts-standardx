import {
  Linter as StandardLinter,
  ProvidedOptions,
  mergeConfig
} from 'standard-engine-ts'
import { options } from './options'

export class Linter extends StandardLinter {
  constructor(customOptions?: ProvidedOptions) {
    super(mergeConfig(options, customOptions))
  }
}

export { options }

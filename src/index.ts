import {
  Linter as StandardLinter,
  ProvidedOptions,
  mergeConfig
} from 'standard-engine-ts'
import { opts } from './options'

export class Linter extends StandardLinter {
  constructor(options?: ProvidedOptions) {
    super(mergeConfig(opts, options))
  }
}

export { opts }

import { Linter, CLI } from 'standard-engine-ts'
import { opts } from './options'

export const linter = new Linter(opts)
export const cli = new CLI(opts)
export { opts }

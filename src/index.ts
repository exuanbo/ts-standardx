import { linter as Linter } from 'standard-engine'
import { opts } from './options'

export const linter = new Linter(opts)
export { opts }

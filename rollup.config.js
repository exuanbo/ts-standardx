const typescript = require('@rollup/plugin-typescript')
const json = require('@rollup/plugin-json')
const pkg = require('./package.json')

module.exports = {
  input: 'src/index.ts',
  plugins: [typescript(), json({ compact: true })],
  external: ['path', 'standard-engine', 'eslint'],
  output: {
    file: pkg.main,
    format: 'cjs'
  }
}

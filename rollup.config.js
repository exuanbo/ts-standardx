import typescript from '@rollup/plugin-typescript'
import json from '@rollup/plugin-json'
import dts from 'rollup-plugin-dts'
import pkg from './package.json'

export default [
  {
    external: ['fs', 'path', ...Object.keys(pkg.dependencies)],
    input: 'src/index.ts',
    plugins: [typescript(), json({ compact: true })],
    output: [
      {
        file: pkg.main,
        format: 'cjs'
      },
      {
        file: pkg.module,
        format: 'es'
      }
    ]
  },
  {
    input: '.cache/src/index.d.ts',
    output: {
      file: pkg.types,
      format: 'es'
    },
    plugins: [dts()]
  }
]

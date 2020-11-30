import typescript from '@rollup/plugin-typescript'
import json from '@rollup/plugin-json'
import dts from 'rollup-plugin-dts'
import pkg from './package.json'

const EXTERNAL = ['fs', 'path', ...Object.keys(pkg.dependencies)]

export default [
  {
    external: EXTERNAL,
    input: 'src/index.ts',
    plugins: [typescript(), json({ compact: true, preferConst: true })],
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
    external: [...EXTERNAL, 'eslint-config-standard/eslintrc.json'],
    input: 'src/eslintrc.ts',
    plugins: [typescript()],
    output: {
      file: '.eslintrc.js',
      format: 'cjs',
      exports: 'auto'
    }
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

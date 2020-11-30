import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import pkg from './package.json'

const EXTERNAL = ['fs', 'path', ...Object.keys(pkg.dependencies)]
const plugins = [typescript()]

export default [
  {
    external: [...EXTERNAL, '../package.json'],
    input: 'src/index.ts',
    plugins,
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
    plugins,
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

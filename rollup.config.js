import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import pkg from './package.json'

const external = ['path', ...Object.keys(pkg.dependencies), /.*\.json/]
const plugins = [typescript()]

export default [
  {
    external,
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs'
      },
      {
        file: pkg.module,
        format: 'es'
      }
    ],
    plugins
  },
  {
    external,
    input: 'src/eslintrc.ts',
    output: {
      file: '.eslintrc.js',
      format: 'cjs',
      exports: 'auto'
    },
    plugins
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

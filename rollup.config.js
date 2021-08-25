import __esbuild from 'rollup-plugin-esbuild-transform'
import dts from 'rollup-plugin-dts'
import pkg from './package.json'

const external = ['path', ...Object.keys(pkg.dependencies), /\.json$/]

const esbuild = () =>
  __esbuild({
    loader: 'ts',
    target: 'es2019'
  })

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
    plugins: [esbuild()]
  },
  {
    external,
    input: 'src/eslintrc.ts',
    output: {
      file: '.eslintrc.js',
      format: 'cjs',
      exports: 'auto'
    },
    plugins: [esbuild()]
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

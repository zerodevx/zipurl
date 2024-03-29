import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'

export default {
  input: 'index.js',
  output: {
    file: 'dist/index.umd.js',
    format: 'umd',
    name: 'window',
    extend: true
  },
  plugins: [
    resolve(),
    terser({
      module: true,
      format: { comments: false }
    })
  ]
}

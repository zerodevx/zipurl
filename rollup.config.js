import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.js',
  output: {
    format: 'umd',
    name: 'window',
    file: 'zipurl.min.js',
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

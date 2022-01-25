import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'

const production = !process.env.ROLLUP_WATCH

export default {
  input: 'index.js',
  output: {
    format: 'umd',
    name: 'window',
    file: 'zipurl.min.js',
    extend: true
  },
  plugins: [
    resolve(),
    !production && serve({ port: 8000 }),
    !production && livereload(),
    production && terser({
      module: true,
      format: { comments: false }
    })
  ],
  watch: {
    clearScreen: false
  }
}

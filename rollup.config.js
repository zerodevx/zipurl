import pkg from './package.json'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'

const production = !process.env.ROLLUP_WATCH

export default {
  input: pkg.exports.import,
  output: {
    format: 'umd',
    name: 'window',
    file: pkg.exports.require,
    extend: true
  },
  plugins: [
    resolve(),
    !production && serve({ port: 5000 }),
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

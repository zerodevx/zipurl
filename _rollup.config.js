// Bug in [@rollup/plugin-terser](https://github.com/rollup/plugins/issues/1366)
// throws build error when using ESM version of `rollup.config.js`

import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'

export default {
  input: 'index.js',
  output: {
    file: 'zipurl.min.js',
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

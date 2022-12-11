const resolve = require('@rollup/plugin-node-resolve')
const terser = require('@rollup/plugin-terser')

module.exports = {
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

/* eslint-env mocha */
/* eslint-disable quotes */
/* global chai, zipurl, unzipurl */

mocha.setup({
  ui: 'bdd'
})

describe('unit tests', () => {
  const assert = chai.assert

  describe('basic', () => {
    it('encodes string', () => {
      assert(
        zipurl('hello world!') === 'H4sIAAAAAAAAA8tIzcnJVyjPL8pJUQQAbcK0AwwAAAA'
      )
    })

    it('decodes string', () => {
      assert(
        unzipurl('H4sIAAAAAAAAA8tIzcnJVyjPL8pJUQQAbcK0AwwAAAA') ===
          'hello world!'
      )
    })
  })
})

mocha.run()

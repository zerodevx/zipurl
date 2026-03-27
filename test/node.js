import test from 'node:test'
import assert from 'node:assert/strict'
import { zipurl, unzipurl } from '../index.js'

console.log(`\nNode.js tests:\n`)

test('roundtrip: basic string', async () => {
  const input = 'hello world'
  const zipped = await zipurl(input)
  const output = await unzipurl(zipped)
  assert.equal(output, input)
})

test('roundtrip: unicode', async () => {
  const input = '你好 🌏🚀 café üñîçødê'
  const zipped = await zipurl(input)
  const output = await unzipurl(zipped)
  assert.equal(output, input)
})

test('roundtrip: empty string', async () => {
  const input = ''
  const zipped = await zipurl(input)
  const output = await unzipurl(zipped)
  assert.equal(output, input)
})

test('roundtrip: long string', async () => {
  const input = 'abc123 '.repeat(10_000)
  const zipped = await zipurl(input)
  const output = await unzipurl(zipped)
  assert.equal(output, input)
})

test('output is url-safe', async () => {
  const input = 'test url safe + / = check'
  const zipped = await zipurl(input)

  assert.match(zipped, /^[A-Za-z0-9\-_]+$/)
})

test('compression actually reduces size (typical case)', async () => {
  const input = 'aaaaaaabbbbbbbcccccccddddddd'.repeat(100)
  const zipped = await zipurl(input)

  // base64 expands ~33%, but gzip should still win here
  assert.ok(zipped.length < input.length)
})

test('invalid input throws', async () => {
  await assert.rejects(() => unzipurl('invalid!!base64'), {
    name: /Error|TypeError/
  })
})

import test from 'node:test'
import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import { once } from 'node:events'

/**
 * @typedef {Object} RunOptions
 * @property {string[]} [args]
 * @property {string} [input]
 */

/**
 * @typedef {Object} RunResult
 * @property {number} code
 * @property {string} stdout
 * @property {string} stderr
 */

/**
 * Run a CLI file with optional args or stdin input.
 *
 * @param {string} file
 * @param {RunOptions} [options]
 * @returns {Promise<RunResult>}
 */
const run = async (file, options = {}) => {
  const { args = [], input = '' } = options

  const ps = spawn(process.execPath, [file, ...args], {
    stdio: ['pipe', 'pipe', 'pipe']
  })

  /** @type {string} */
  let stdout = ''

  /** @type {string} */
  let stderr = ''

  ps.stdout.setEncoding('utf8')
  ps.stderr.setEncoding('utf8')

  ps.stdout.on('data', (/** @type {string} */ d) => {
    stdout += d
  })

  ps.stderr.on('data', (/** @type {string} */ d) => {
    stderr += d
  })

  if (input) ps.stdin.write(input)
  ps.stdin.end()

  const [code] = await once(ps, 'close')

  return {
    code: /** @type {number} */ (code),
    stdout: stdout.trim(),
    stderr: stderr.trim()
  }
}

const ZIP = new URL('../bin/zipurl.js', import.meta.url).pathname
const UNZIP = new URL('../bin/unzipurl.js', import.meta.url).pathname

console.log(`\nCLI tests:\n`)

test('CLI (argv): zip -> unzip roundtrip', async () => {
  const url = 'https://example.com/hello?x=1'

  const zipRes = await run(ZIP, { args: [url] })
  assert.equal(zipRes.code, 0)
  assert.ok(zipRes.stdout.length > 0)

  const unzipRes = await run(UNZIP, { args: [zipRes.stdout] })
  assert.equal(unzipRes.code, 0)
  assert.equal(unzipRes.stdout, url)
})

test('CLI (stdin): zip -> unzip roundtrip', async () => {
  const url = 'https://example.com/hello?x=1'

  const zipRes = await run(ZIP, { input: url })
  assert.equal(zipRes.code, 0)

  const unzipRes = await run(UNZIP, { input: zipRes.stdout })
  assert.equal(unzipRes.stdout, url)
})

test('CLI: empty input should fail', async () => {
  const res = await run(ZIP)
  assert.equal(res.code, 1)
  assert.match(res.stderr, /No arguments/)
})

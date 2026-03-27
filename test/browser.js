// browser.test.js
import http from 'node:http'
import { spawn } from 'node:child_process'
import { once } from 'node:events'
import fs from 'node:fs/promises'

const PORT = 5173

function html(mode = '') {
  const forceFallback = mode === 'fallback'

  return /* html */ `
<!doctype html>
<html>
<body>
<script>
${
  forceFallback
    ? `
delete globalThis.CompressionStream
delete globalThis.DecompressionStream
delete Uint8Array.prototype.toBase64
delete Uint8Array.fromBase64
`
    : ''
}
</script>

<script type="module">
import { zipurl, unzipurl } from './index.js?mode=${mode}'

const results = []

async function test(name, fn) {
  try {
    await fn()
    results.push({ name, ok: true })
  } catch (err) {
    results.push({ name, ok: false, error: err?.message || String(err) })
  }
}

// --- tests ---

await test('basic', async () => {
  const input = 'hello world'
  const out = await unzipurl(await zipurl(input))
  if (out !== input) throw new Error('mismatch')
})

await test('unicode', async () => {
  const input = '你好 🌏🚀 café üñîçødê'
  const out = await unzipurl(await zipurl(input))
  if (out !== input) throw new Error('mismatch')
})

await test('empty', async () => {
  const input = ''
  const out = await unzipurl(await zipurl(input))
  if (out !== input) throw new Error('mismatch')
})

await test('long string', async () => {
  const input = 'abc123 '.repeat(10000)
  const out = await unzipurl(await zipurl(input))
  if (out !== input) throw new Error('mismatch')
})

await test('url-safe', async () => {
  const z = await zipurl('test + / =')
  if (!/^[A-Za-z0-9\\-_]+$/.test(z)) {
    throw new Error('not url safe')
  }
})

await test('compression effectiveness', async () => {
  const input = 'aaaaaaabbbbbbbcccccccddddddd'.repeat(100)
  const z = await zipurl(input)
  if (z.length >= input.length) {
    throw new Error('not compressed')
  }
})

await test('invalid input throws', async () => {
  let threw = false
  try {
    await unzipurl('invalid!!base64')
  } catch {
    threw = true
  }
  if (!threw) throw new Error('did not throw')
})

await test('multiple roundtrips (stability)', async () => {
  for (let i = 0; i < 10; i++) {
    const input = 'loop-' + i + '-' + Math.random()
    const out = await unzipurl(await zipurl(input))
    if (out !== input) throw new Error('mismatch at ' + i)
  }
})

// --- report ---

await fetch('/report?mode=${mode}', {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify(results)
})

window.close()
</script>
</body>
</html>
`
}

let phase = 'native'
let failures = 0

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url || '/', `http://localhost:${PORT}`)

  if (url.pathname === '/') {
    res.setHeader('content-type', 'text/html')
    res.end(html(phase))
    return
  }

  if (url.pathname === '/index.js') {
    const code = await fs.readFile(new URL('../index.js', import.meta.url))
    res.setHeader('content-type', 'application/javascript')
    res.end(code)
    return
  }

  if (url.pathname === '/report' && req.method === 'POST') {
    let body = ''
    for await (const chunk of req) body += chunk

    const results = JSON.parse(body)
    const mode = url.searchParams.get('mode')

    console.log(`\nBrowser tests (${mode}):\n`)

    let failed = 0
    for (const r of results) {
      if (r.ok) {
        console.log('✓', r.name)
      } else {
        failed++
        console.error('✗', r.name, '-', r.error)
      }
    }

    failures += failed
    res.end('ok')

    if (phase === 'native') {
      phase = 'fallback'
      openBrowser()
    } else {
      server.close()
      setTimeout(() => process.exit(failures ? 1 : 0), 200)
    }

    return
  }

  res.statusCode = 404
  res.end()
})

await new Promise((resolve) => server.listen(PORT, /** @type {any} */ (resolve)))

function openBrowser() {
  const url = `http://localhost:${PORT}`

  const cmd =
    process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'cmd' : 'xdg-open'

  const args = process.platform === 'win32' ? ['/c', 'start', url] : [url]

  spawn(cmd, args, { stdio: 'ignore', detached: true })
}

console.log('Running browser tests (native + fallback)...')
openBrowser()

await once(server, 'close')

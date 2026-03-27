let _pako, _jsb //caches
const cdn = (/** @type {string} */ path) => `https://cdn.jsdelivr.net/npm/${path}`
const pako = async () => (_pako ??= await import(cdn('pako@2/dist/pako.esm.mjs')))
const jsb = async () => (_jsb ??= await import(cdn('js-base64@3/base64.mjs')))
const toStream = (/** @type {Uint8Array} */ bytes) =>
  new ReadableStream({
    start(controller) {
      controller.enqueue(bytes)
      controller.close()
    }
  })

/**
 * @param {Uint8Array} bytes
 * @returns {Promise<string>}
 */
async function toBase(bytes) {
  if (typeof bytes.toBase64 === 'function')
    return bytes.toBase64({ alphabet: 'base64url', omitPadding: true })
  if (typeof Buffer !== 'undefined') return Buffer.from(bytes).toString('base64url')
  return jsb().then((m) => m.fromUint8Array(bytes, true))
}

/**
 * @param {string} str
 * @returns {Promise<Uint8Array>}
 */
async function fromBase(str) {
  if (typeof Uint8Array.fromBase64 === 'function')
    return Uint8Array.fromBase64(str, { alphabet: 'base64url', lastChunkHandling: 'loose' })
  if (typeof Buffer !== 'undefined') return new Uint8Array(Buffer.from(str, 'base64url'))
  return jsb().then((m) => m.toUint8Array(str))
}

/**
 * @param {Uint8Array} bytes
 * @returns {Promise<Uint8Array>}
 */
async function gzip(bytes) {
  if ('CompressionStream' in globalThis) {
    const stream = toStream(bytes).pipeThrough(new CompressionStream('gzip'))
    return new Uint8Array(await new Response(stream).arrayBuffer())
  }
  return pako().then((m) => m.gzip(bytes))
}

/**
 * @param {Uint8Array} bytes
 * @returns {Promise<Uint8Array>}
 */
async function gunzip(bytes) {
  if ('DecompressionStream' in globalThis) {
    const stream = toStream(bytes).pipeThrough(new DecompressionStream('gzip'))
    return new Uint8Array(await new Response(stream).arrayBuffer())
  }
  return pako().then((m) => m.ungzip(bytes))
}

/**
 * Encode string -> gzip -> base64url
 * @param {string} input
 * @returns {Promise<string>}
 */
export async function zipurl(input) {
  return toBase(await gzip(new TextEncoder().encode(input)))
}

/**
 * Decode base64url -> gunzip -> string
 * @param {string} input
 * @returns {Promise<string>}
 */
export async function unzipurl(input) {
  return new TextDecoder().decode(await gunzip(await fromBase(input)))
}

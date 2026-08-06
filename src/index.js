let _pako, _jsb //caches
const cdn = (path = '') => `https://cdn.jsdelivr.net/npm/${path}`
const pako = async () => (_pako ??= await import(cdn('pako@2/dist/pako.esm.mjs')))
const jsb = async () => (_jsb ??= await import(cdn('js-base64@3/base64.mjs')))

/** @param {Uint8Array} bytes @returns {Promise<string>} */
async function toB64(bytes) {
  if (typeof bytes.toBase64 === 'function')
    return bytes.toBase64({ alphabet: 'base64url', omitPadding: true })
  if (typeof Buffer !== 'undefined') return Buffer.from(bytes).toString('base64url')
  return jsb().then((m) => m.fromUint8Array(bytes, true))
}

/** @param {string} str @returns {Promise<Uint8Array>} */
async function fromB64(str) {
  if (typeof Uint8Array.fromBase64 === 'function')
    return Uint8Array.fromBase64(str, { alphabet: 'base64url', lastChunkHandling: 'loose' })
  if (typeof Buffer !== 'undefined') return new Uint8Array(Buffer.from(str, 'base64url'))
  return jsb().then((m) => m.toUint8Array(str))
}

/** @param {Uint8Array} bytes @param {CompressionStream|DecompressionStream} transformer @returns {Promise<Uint8Array>} */
async function viaStream(bytes, transformer) {
  // @ts-expect-error - lib.dom types are overly strict about body/BufferSource here; safe at runtime
  const stream = new Response(bytes).body.pipeThrough(transformer)
  return new Uint8Array(await new Response(stream).arrayBuffer())
}

/** @param {Uint8Array} bytes @returns {Promise<Uint8Array>} */
async function gzip(bytes) {
  return 'CompressionStream' in globalThis
    ? viaStream(bytes, new CompressionStream('gzip'))
    : pako().then((m) => m.gzip(bytes))
}

/** @param {Uint8Array} bytes @returns {Promise<Uint8Array>} */
async function gunzip(bytes) {
  return 'DecompressionStream' in globalThis
    ? viaStream(bytes, new DecompressionStream('gzip'))
    : pako().then((m) => m.ungzip(bytes))
}

/**
 * Encode (compress) string -> gzip -> base64url
 * @param {string} input
 * @returns {Promise<string>}
 */
export async function zipurl(input) {
  return toB64(await gzip(new TextEncoder().encode(input)))
}

/**
 * Decode (decompress) base64url -> gunzip -> string
 * @param {string} input
 * @returns {Promise<string>}
 */
export async function unzipurl(input) {
  return new TextDecoder().decode(await gunzip(await fromB64(input)))
}

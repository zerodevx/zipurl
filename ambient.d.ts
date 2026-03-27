interface ToBase64Options {
  alphabet?: 'base64' | 'base64url'
  omitPadding?: boolean
}

interface FromBase64Options {
  alphabet?: 'base64' | 'base64url'
  lastChunkHandling?: 'loose' | 'strict'
}

interface Uint8Array {
  toBase64(options?: ToBase64Options): string
}

interface Uint8ArrayConstructor {
  fromBase64(str: string, options?: FromBase64Options): Uint8Array
}

import { gzip, ungzip } from 'pako'
import { fromUint8Array, toUint8Array } from 'js-base64'

export const zipurl = (data) => fromUint8Array(gzip(data), true)
export const unzipurl = (data) => ungzip(toUint8Array(data), { to: 'string' })

![NPM Version](https://img.shields.io/npm/v/zipurl)

# zipurl

> Generate gzipped url-safe strings on the browser or nodejs

Encode long strings into compressed lossless gzipped url-safe representations. Very useful for
sharing large datasets, like JSON, via URLs. Featuring:

- [x] Lightning-fast, feather-light (≈1kB), zero dependencies
- [x] Native-first, uses web standards for modern browsers
- [x] Feature-detects, falling back to [pako](https://github.com/nodeca/pako) and
      [js-base64](https://github.com/dankogai/js-base64) for older envs
- [x] Universal, works on both browser and nodejs
- [x] Battle-tested, test suite included

## Demo

This package is used in [JSON Pretty Print Online](https://zerodevx.github.io/json-pretty-print/) to
compress and share JSON via URLs.

See it in action
[here](https://zerodevx.github.io/json-pretty-print/#/H4sIAAAAAAAAA-3RO2_bMBAA4L8icBYsyW97atGtKNDBo-GBlk7SIXyBPDlNA__3Hp2gCVoNWgVwk-7Fw33nV4GNOFa5GAJ4IzWI4-OzLCuRi_fAd9ub7KSReo6Blqg-qr7AL6mdgkVtNWdlTXjjHvID5MJbFfs16Ct4zjpvW4yhVyFvkqTnZE_kwrEoPs0p3pJFA60cFC2c6bj5ipbLf1gPOkMXBp01VlmfBaSM96Q8q60JUBPQ4DPZoMNQo-kyUEgLHlDbwZB_4SEnDkvHkzhKqOG3NXHPrwFl8TnnPLTgwdQQ4s7Uw-MeCrueOK2k6QbZxRCYeC5L2GItCXmRtxvc7_yC7Pjv_HGGG3iugya2wHNQQMTxSy4auOHjrTM_9uLi4AbCE1nHpTbEU8r65ykew9tnBuDIt95b3uqe_23R9hqP_N6B_9SfZCs9ivsldkT85Qj-chL-MuHPHX81gr-ahL9K-HPHX4_gryfhrxP-3PE3I_ibSfibhD93_O0I_nYS_jbhzx1_N4K_m4S_S_hzx9-P4O8n4e8T_tzxDyP4h0n4h4Q_d_yq_F-_KqfoV2XSn63-5Q9ETMAG5BMAAA).

## Install

```
$ npm i -D zipurl
```

## Usage

### Browser via CDN

```html
<script type="module">
  import { zipurl, unzipurl } from 'https://cdn.jsdelivr.net/npm/zipurl@2'

  console.log(await zipurl('hello world!')) // H4sIAAAAAAAAA8tIzcnJVyjPL8pJUQQAbcK0AwwAAAA
  console.log(await unzipurl('H4sIAAAAAAAAA8tIzcnJVyjPL8pJUQQAbcK0AwwAAAA')) // hello world!
</script>
```

### With a bundler or in Node.js

```js
import { zipurl, unzipurl } from 'zipurl'

console.log(await zipurl('hello world!')) // H4sIAAAAAAAAA8tIzcnJVyjPL8pJUQQAbcK0AwwAAAA
console.log(await unzipurl('H4sIAAAAAAAAA8tIzcnJVyjPL8pJUQQAbcK0AwwAAAA')) // hello world!
```

### Use the CLI

Install globally:

```
$ npm i -g zipurl
```

Input arguments:

```
$ zipurl hello world!
H4sIAAAAAAAAA8tIzcnJVyjPL8pJUQQAbcK0AwwAAAA

$ unzipurl H4sIAAAAAAAAA8tIzcnJVyjPL8pJUQQAbcK0AwwAAAA
hello world!
```

Pipe through `stdin`:

```
$ echo hello world! | zipurl
H4sIAAAAAAAAA8tIzcnJVyjPL8pJUQQAbcK0AwwAAAA

$ echo H4sIAAAAAAAAA8tIzcnJVyjPL8pJUQQAbcK0AwwAAAA | unzipurl
hello world!
```

## API

### zipurl(input: string): Promise<string>

Compress a string using gzip and encode as URL-safe base64.

### unzipurl(input: string): Promise<string>

Decode base64url and decompress back into the original string.

## Encoding/decoding examples

```js
const encoded = await zipurl('hello world!') // H4sIAAAAAAAAA8tIzcnJVyjPL8pJUQQAbcK0AwwAAAA
const decoded = await unzipurl(encoded) // hello world!
```

That's it!

Ok, so it works much better with larger datasets:

<!-- prettier-ignore -->
```js
const a = JSON.stringify({"students":[{"name":"Jack","age":17},{"name":"Jill","age":16},{"name":"Sue","age":16}],"class":"math"})

console.log(a.length) // 103 bytes
console.log(encodeURIComponent(a).length) // 199 bytes
console.log((await zipurl(a)).length) // 116 bytes
```

Let's try something bigger (3122 bytes):

<!-- prettier-ignore -->
```js
const b = JSON.stringify({"shaderStatements":[{"output":"b","outputSwizzle":"zxyw","assignmentOperator":"-=",
"functionName":"","parameter":"a","valueX":6.62,"valueY":6.165,"valueZ":-0.974,"valueW":-4.233,"parameterSwizzle":"xzyy"},
{"output":"b","outputSwizzle":"ywxz","assignmentOperator":"-=","functionName":"","parameter":"a","valueX":-4.88,
"valueY":0.649,"valueZ":0.171,"valueW":-0.084,"parameterSwizzle":"yzwx"},{"output":"a","outputSwizzle":"xzwy",
"assignmentOperator":"*=","functionName":"logA","parameter":"b","valueX":-2.368,"valueY":-7.284,"valueZ":-5.01,
"valueW":-0.005,"parameterSwizzle":"zzwz"},{"output":"b","outputSwizzle":"xwzy","assignmentOperator":"-=",
"functionName":"sin","parameter":"b","valueX":-3.686,"valueY":-3.258,"valueZ":-4.059,"valueW":-8.506,
"parameterSwizzle":"wwzz"},{"output":"b","outputSwizzle":"zxyw","assignmentOperator":"=","functionName":"ceil",
"parameter":"b","valueX":5.36,"valueY":-8.274,"valueZ":0.002,"valueW":5.429,"parameterSwizzle":"xxwy"},{"output":"a",
"outputSwizzle":"xzwy","assignmentOperator":"=","functionName":"","parameter":"b","valueX":-3.353,"valueY":-5.681,
"valueZ":-7.792,"valueW":1.254,"parameterSwizzle":"zyxw"},{"output":"b","outputSwizzle":"ywxz","assignmentOperator":"+=",
"functionName":"floor","parameter":"a","valueX":6.669,"valueY":-0.05,"valueZ":-8.629,"valueW":-2.802,
"parameterSwizzle":"xyyw"},{"output":"b","outputSwizzle":"xywz","assignmentOperator":"+=","functionName":"fract",
"parameter":"a","valueX":0.103,"valueY":-3.118,"valueZ":0.255,"valueW":6.287,"parameterSwizzle":"xyyw"},{"output":"a",
"outputSwizzle":"zxyw","assignmentOperator":"/=","functionName":"ceil","parameter":"","valueX":5.484,"valueY":-1.26,
"valueZ":8.705,"valueW":-1.59,"parameterSwizzle":"zyyw"},{"output":"a","outputSwizzle":"wyzx","assignmentOperator":"=",
"functionName":"sqrtA","parameter":"b","valueX":-0.366,"valueY":-0.117,"valueZ":0.162,"valueW":1.761,
"parameterSwizzle":"yywy"},{"output":"a","outputSwizzle":"yxzw","assignmentOperator":"*=","functionName":"atan",
"parameter":"b","valueX":3.743,"valueY":-0.003,"valueZ":4.636,"valueW":0.056,"parameterSwizzle":"wxxw"},{"output":"b",
"outputSwizzle":"zwxy","assignmentOperator":"=","functionName":"","parameter":"","valueX":6.083,"valueY":-6.322,
"valueZ":0.032,"valueW":0.428,"parameterSwizzle":"yzyy"},{"output":"a","outputSwizzle":"zxyw","assignmentOperator":"/=",
"functionName":"","parameter":"a","valueX":0.151,"valueY":1.024,"valueZ":-2.862,"valueW":3.193,"parameterSwizzle":"xzyx"},
{"output":"a","outputSwizzle":"zwxy","assignmentOperator":"*=","functionName":"","parameter":"a","valueX":-1.637,
"valueY":1.828,"valueZ":1.924,"valueW":-0.006,"parameterSwizzle":"yxyy"}],"randSeed":-1810015485,
"randSeedString":"1574121532870","iterationCount":1,"gridPosX":4,"gridPosY":0,"generation":17,"subGeneration":1,
"hueOffset":0.218,"hueScale":-0.789,"saturationScale":0.493,"uvOffsetX":-0.36,"uvOffsetY":0.559,"uvScaleX":1.02,
"uvScaleY":-1.143,"rotate":0,"usePalette":0,"paletteColors":[{"x":0.041,"y":0.01,"z":0.584},{"x":0.131,"y":0.102,
"z":0.658},{"x":0.9,"y":0.855,"z":0.917},{"x":0.797,"y":0.882,"z":0.478}],"saveListIndex":-1,"uniqueID":361315861})

console.log(b.length) // 3122 bytes
console.log(encodeURIComponent(b).length) // 4952 bytes
console.log((await zipurl(b)).length) // 1120 bytes - 77.4% reduction in size :)
```

## Google Apps Script

If you're using GAS somewhere along your pipeline, `zipurl` is supported natively (kindof).

Here's the gist:

<!-- prettier-ignore -->
```js
function zipurl(data) {
  const { gzip, base64EncodeWebSafe, newBlob } = Utilities
  const blob = gzip(newBlob(data)).getBytes()
  return base64EncodeWebSafe(blob).replace(/=/g, '')
}

function unzipurl(data) {
  const { ungzip, base64DecodeWebSafe, newBlob } = Utilities
  const blob = newBlob(base64DecodeWebSafe(data)).setContentType('application/x-gzip')
  return ungzip(blob).getDataAsString()
}
```

And the outputs should be binary-equivalent to that of this package.

## License

ISC

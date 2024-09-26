![NPM Version](https://img.shields.io/npm/v/zipurl)

# zipurl

> Generate **gzip** web-safe strings on the browser. Built in 10 minutes. :smile:

Dead simple mash-up of [`pako`](https://github.com/nodeca/pako) and
[`js-base64`](https://github.com/dankogai/js-base64) to create **gzipped** URL-safe base64 strings
from any data on the browser. Very useful for passing large datasets via shareable web links.

48kb minified, 15kb **gzipped**, pun not intended.

## Demo

This package is used in [JSON Pretty Print Online](https://zerodevx.github.io/json-pretty-print/) to
compress and share stringified JSON with URL query params.

See it in action
[here](https://zerodevx.github.io/json-pretty-print/H4sIAAAAAAAAA6WZa3OkNhaG_4q2Kx82tQ0RAgTyp3E8no2T8WTW4ySVSlJbAkS3dmjocLHdSeW_79EFEAm245pylbsbJKHb--g9h59-3_xXFpuzDcUJozwso5SWNA9wmgZRHkTxZruRdSEeNmd4u9kNpmxCkyjgmZdneeRFNM-8NI5Sj1LMy4KHnGaZqted5728E5uzvh3EdpPxitc5_Nx8RraUpH7KoNRR5v3Qqqv7vj-effHFseK52DdV4cv-i5A8hARK8R2UCKPtRpzERVM1LZTP2ua-hns1P6jqb5u25uhD1XB1cSeg16pUKQ68EnAlbw5HXp_g0vtvb26vLs7hGtyTFVypVN1OVX11bNpe5tyH4qp3-6ZWjf8rQP9kQfQ5ijDzSExS1aeiaEXXwd0gTNB5DU-_aIa236LLSv7G72RViS16J-7RtXiQebNFDCeBqpg1Qw_VLntUqLEIxGt5QAe-gyZ4JX8dOOpk3aNj28hCwJeDVAVkgY68lRzmC4kB6iKhLvNCHmUnc1nvfHR-EL17BZXDDmog6KhAvw4SFaIT7QBtwo_ORzfi2Iq9nizZo3yojnzslOmPak61qR_VlCW0ypFsB1WgqSqoNFQVP-QNkrX_c_uzmvxW7GTXi1ao3UJwQD0cezi8xelZwM5IjDz4hjGUrHgv-6GAKYZ95MdhRFgAV5t6Zy-n2E9SypLtpuc7mOufoHGnx2r51fPV-sJ8D2rNTLf0ApllPzRFo66rSdz8st2UrYTqqrHfN2pD42kP3fJM9nuO3lTNqdj8sTX3A2ePQcsc_bCXvZhuk_k27G-uBo6-hFWrxGnzBzxu1wrRw1JAga9EVcE-cLbqP9CPzYD2_E4ghoa6FbxAB1gs2PCdD50u-V0D4xRv2kGqPcOPx8o8eqnbUsQhJVRkIoMfhM-6DSbd4iwq85CGHitBvFFaxh7PktBLcpwVBWUlI3Sh25JX3VK44TaKQl9v_5cIN3hKuN-rxmHGlrpdUe3b85ur764d2d6pmpnQqq1AGcNhTbYRUbKlXphG4VK2QYzOqwxaayuBbhpebNHXPB8OGd-i94No-wbdaOEGmFJHuLB-4oDuhNr9Wq_yCLs_l4UslLK0dvW2tIJy7mkdgpzMbkWCT4L00YVRH-jS_BvVJrp-_v4g2hz2YC-bGlXQoRZaMc_SCu3UQ0ZK-Ojq2MF9PvRiKrwQsmp61K8uAI8dRyTk0IF0FHbGIp3u57ktYDkxDsXt2cQpMwFNnnORc6j7rungNChGLFl1ol4cALwTrGBifXRt8CIezGw4k2gaNaN2WcfdoWm5--hSXZtQqf4pmNmhLYYOGIYr_Yg12xdTBaZJL_fjhAuIFwDhEjilzjBbIxzxw4jFLF7wzWOhj1lC0xlwdv6hrpkVteG1ntVawqeGmerWdO1Jpn3dnNBXvG1hgvqmXoHaRcUlDP49X2Xam0oc1Nz-AEJrH-HZrGAHZwH-FJ4JkRSchykTJC5YUsw8IxPP0iQJA3ArXl7m2IsIEV6WBcKjQVJkWclFUMZP-5Bwi1kAB8wLcRYvcVYNwrUh96I9gRM4HNV0P0m08w-3391cLY2Iqp2byq-OcJgMIKQVqqUk-BzFYEZCHAcLqjE4X2_Vfh7dyFV7L2tjRL4WbSdOyogYFFqevR49geCTBZjNx_RFqWBx-moPMerfQNGKB-yJoiAwzb2ZN3UnwN1YDFqlgkbVL03NkT1W2_aXvjW6EvMAU7qYlOuWFKN4rfpHldeWPSPo_spSBV2LKgOMCZoaALXkQJQP5tEOdsZOw4WpnbGmZm83Uwv6rC_pEfroW0srO7p67IkAEj0CG4KVnQqCWxyfEXKGozXYJIHPohCWeUkbAoc3wYxGM26MN1JeDz7H0et9CouV9wJ24AidWm9o09WnoQNztKsE7GF03tagoTUvJXi-R98D1mFvrZmpUw33L4a6hrb2_PCol3L19mL-ZLyGvxUAFSxWrkrwkqZFYIyRAVA4AYgLWiaYCi8ME-pFRUo8xsrQi7IijWOcJVHCnwZQsCU49knyQgDhJwAEHO9P6Muhrbtn4qCr15f__taBz1HVzFTFVyD4XbNmplgM2KHEIxAhLrATJzEcM3Xe5B_Rh14t0xadw5FRCGHh82PTfgT0BAl20PN-NApW10Yk9kcxa1ZHHD56a7QxBTGj2mSN9FFo_-fDURYclD25AdgG1mPorQ4mplhKFT6HMSg6d8StpWurdnImyzvjufoJOeBTLAgeMwnMwwlM3G2AQbRnBK-GQSn1KUtZwpbCjZnPYN6Vk14IV6oHuSBTPwd1oxi__R29Xuw5IPiCt3fqkP-LVl-fTEzzPw5eYEWrsNs-ggFom-Zj94hOnW3piJT-HY3CDuD3sJXa05pRKEJK8zCMgyRkcY5nnUaTTpOi4GVCQaJlmngRT0CnhDKP0ZBFRcmiOGHPBD5kSxPsx-STAh81K07g8w2vBfgq8XEh1L_I9OLy3e3VxaUj1I9Q8V7Ve6XYKXOxplRtEFjghTQgC6XSiKDXgrew6evRI7xp2gzOOIjLwC8UfA8LFoWpK9QrHfKbM9CcVo7KrD7Gg9ao6HthnYA61EwGAwQ9Ov658l1TDUf4ImyhSdPFZD3mYKCzjhwED2ZlClG06icqgBotB4z7MO2a4OVaZzW0qvV5bQKyh1wcewEYkhY1EzjGg1nL3XDJYkg5CD5HOiYcXIR6veN4NNjAkIxxi1NwDs-0KXkMH7GHI4-w24CcEQbcWMMHBOdRAqRJFvRIiI8jQkMnizKN2M2cjKkUPRR1Y1wjtbfsONU2fDaP8roZdhXvINoT1QpOAAk7jm54DZN73K_w5Bve78FggjxuZPMYUWb5OEBJPhkoRUR4HJepyCjPSpbOQIknoJCgEBkjuVcUGfEizAOPpRH18hzHNKZJkMbps5mUAAc-fWnokTyVSYHzV5zQ7al7JvD4oJByc3XhIGWvqvaq5qtOQaWV-VrUkVBz_IeELqOOOCHo8kGo3Nd4-l8DX2DBOlAwWIFW_tbUHLCSMhcr74AN4s9hhaWMEaL24TYYtzdsZlL7hdmljkGDdtda2g-j3BdOfySQNRmmlkqNWo9xYe-PDn6kmoWJ-8RRtKq2Ap1uCqrqjOnoFGy84LoZ0z2dPnKshhnvHEUIGzbpEY29nmg5d1TMCRbdkzEhY-GoG5whO4JtkSlyMaan2BnlE3aGeQG7xQTOOSDPGo9C4sc4SJY4CoLEJywl1OURYHj0KroFNX43mWtXw8WV6J_J5gJD4EgACrWwSCscuuZtt-dgTcC9tOv5XI6uQW-PJT4cwb3U1DwaeEQ0okVURiyL0yiJk5k_dM58lJjmBFMv41nsRRHLvbQoC09EAVdvZuAAKJ97A4OJyjx9WiJ3EXhcN01xQl_BgjX3_PQkgL68evv2-vK1w5-Dqry3dV9lsMQHUawRCCdAoAR8dPKnACSKGTqHcVRyeg8DfrbtxvcwTdvv1ZWmkopDJMap-y5mNXtpXISR9ZixNOKyjseqRccAU64AsPNaJUaACDpBMr0gMa0pOU4BjjYX8xsUAwXTOJBDSdQWnbMwk1dZxEoLxBkvMqWHDXXAkU0QWHR4Svy6PkSXWI5yfvKEFsszY60-OM9U5sdCbGKTJo6BnH7UlGge2_XRrXmgcoyKZMa4jeUmf7c8LTo5xYE--g_Uml-SaaeoH2gMn15IA9XVI8G-fHMG8Rj8Eg_UhwF-wVlAz-LVHIyXJCrbgnG0wF-sMo5RyIjrxhZcG5aZGHWawIfdJYoleis-Db9vZAv9rdEl7I6m71fodyN3uw5Oa167eWHixIQCTAsHRQ_A5nUALjXvMDB-CQN_-T_JtmU7hx4AAA/).

## Install

```
$ npm i -D zipurl
```

## Usage

### In the browser

#### Via CDN

```html
<script src="https://cdn.jsdelivr.net/npm/zipurl@1"></script>
<script>
  console.log(zipurl('hello world!')) // H4sIAAAAAAAAA8tIzcnJVyjPL8pJUQQAbcK0AwwAAAA
  console.log(unzipurl('H4sIAAAAAAAAA8tIzcnJVyjPL8pJUQQAbcK0AwwAAAA')) // hello world!
</script>
```

The functions `zipurl()` and `unzipurl()` are available in the global (`window`) scope.

#### Or locally

```html
<script src="path/to/dist/index.min.js"></script>
```

#### Or with a bundler

```js
import { zipurl, unzipurl } from 'zipurl'
```

### In Node.js

#### ESM

```js
import { zipurl, unzipurl } from 'zipurl'

console.log(zipurl('hello world!')) // H4sIAAAAAAAAA8tIzcnJVyjPL8pJUQQAbcK0AwwAAAA
console.log(unzipurl('H4sIAAAAAAAAA8tIzcnJVyjPL8pJUQQAbcK0AwwAAAA')) // hello world!
```

#### CJS

```js
const { zipurl, unzipurl } = require('zipurl')
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

## Encoding/decoding

```js
zipurl('hello world!') // H4sIAAAAAAAAA8tIzcnJVyjPL8pJUQQAbcK0AwwAAAA

unzipurl('H4sIAAAAAAAAA8tIzcnJVyjPL8pJUQQAbcK0AwwAAAA') // hello world!
```

That's it!

Ok, so it works much better with larger datasets:

<!-- prettier-ignore -->
```js
const a = JSON.stringify({"students":[{"name":"Jack","age":17},{"name":"Jill","age":16},{"name":"Sue","age":16}],"class":"math"})

console.log(a.length) // 103 bytes
console.log(encodeURIComponent(a).length) // 199 bytes
console.log(zipurl(a).length) // 116 bytes

// Let's try something bigger (3122 bytes)
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
console.log(zipurl(b).length) // 1120 bytes - 77.4% reduction in size :)
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

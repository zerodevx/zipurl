# zipurl

> Generate **gzip** web-safe strings on the browser. Built in 10 minutes. :smile:

Dead simple mash-up of [pako](https://github.com/nodeca/pako) and
[js-base64](https://github.com/dankogai/js-base64) to create **gzipped** URL-safe base64 strings
from any data on the browser. Very useful for passing large datasets via shareable web links.

48kb minified, 15kb **gzipped**, pun not intended.

## Demo

This package is used in [JSON Pretty Print Online](https://zerodevx.github.io/json-pretty-print/) to
compress and share stringified JSON with URL query params.

See it in action
[here](https://zerodevx.github.io/json-pretty-print/?data=H4sIAAAAAAAAA7WaXXOkNhaG7_MrtK692FQaAgIE8tU4tmfjxJ7MepykUklqS4Do1g4NHT5sd1L73_foC2g3bXs83krF0wLpICHpOe854tcvEPoL_kfo6N8iPzpGR8SLKWFBESakIJnvJYkfZn4YHS10NVHl_B4qeqa87E27mMShz1InS7PQCUmWOkkUJg4hHityFjCSpoON9iTrxC2Hdl3Tc3M1ZSWrMnnx6O94QXDiJtS22Iis6xt1b9V1m-Ovv96ULOOrusxd0X0d4PsA27psKesFoSnyLT-ty7qRbdOmvqtsvYqtlcHLuqkY-lDWbLi15DBK1aLga1Zyez2r1xtWbeWN9z9c31ycntg7UE2U8noprbXS2JtN3XQiYy60Gsaxqiv10K989A_qh1-i0KMOjnAy9D7PG962so4fxOikgr6d1n3TLdB5Kf5kt6Is-QK943foit-LrF4g6sX-0Dyt-042Pu9QLofNEavEGq3ZEgyxUvzRM9SKqkObphY5hx9rISuIHG1YIxi8ZsR7aIu4vMxysRGtyES1dNHJmnfTK6jol9ACQX85-qMXKOctb3qwCYXWRdd80_CVepeiQ1lfbpjtlO6PNCdtqkfVRQFWGRJNLyvUZQmN-rJk66xGonJ_a34bJqjhS9F2vOFq7WHPJ44XOV5w4yXHPj3GEXLgl-fZ-iXrRNfn8tXD2nSjIMTUt_fqamlvJp4bJ4TG5lbHlnImflUl9djJgIxtuZJkL8diBlPUr8eyHspYZvmkbr1e13k9qSxn40iVfje9KBoBj5x25C_zr9xL-bgZd5b1DUtFt2LobVlv8yNz_7-LAxb8GQuXNXSboZ9XouNPGsBzBmA_MzlN6BtYaCXfDlZ2xrdsOO9gOckm3_KyhCU92ZN_Q7_UPVqxW44o6quGsxytYcXBNm9dO78Fu61hSvjbphdq-bPNplSdVh2eR1zBo4BgwlOeQgGzh4izC8QizkvDIgtI4NACOBcmReSwNA6cOPPSPCe0oJjMIK5gZTvHuGARhoE77vwXMM728EnG_SSfCrMwh7iDgLs8ub748WqPcLfSVsoV4EpARr8-TLgQS8IRJ0jCYI5wfoROyhRMNyVH1zXLF-g7lvXrlC3Q-543XY2uFeN8j5A9xsEq4Wt0yyUoFNrEBkCRiVzkEkIKc2pvGvZM7ilkAXn0XkWcDexy0akGFSBM_7Fg4m03_r7nTQa7oxN1hUroUQNW9LMUzFr5EAtUF11sWrjP-o4PlXeYJ01b1KkK8Fg7Ii76FhghCW2rtKqfJ6aCQaodyrRnA9L1C6izjPGMQdt3dQuuN7cENxhCHV-D1xq4Di_WRVeaxPxev43JS9RG9ainboFNh6aA5qJzeW3wKvKP5L4Z2s7QwWPBlc56ANMX3QRek5rup5yBjx0fnEF8HITHHj3sDLAbhDSi0YwrcGjgejQmyQFfYKZnJLd-d2OZT1yCkPM_FqfAlwN7WPEV8P9dvUXfsqaB-ejq6kX8Py2ZgNl4z16I_7clX8vl8DPQonk2-kdUTcjve6-Lfs7jnLEgoRxHOY3zh-jHD9CfxHHggx52siLznBBj7qSpzx3ix3maFoz7RTSD_gPqNlh41Aeh8Rnktyt2h_xlzx-C_7K-480WFOR6I5fBs-F_8uHmx-uLOXkr7WXa3JsNePceCHPQASTY_xJFIHEDL_JnHAAFpXYjN73VuBfNnai0vP2ONy3fSnk78R0W_WdWaXI2CMtR0g4_JDB2RJtSphaV2n8YzoDolQ4D8D-9mdVVy0EzG49hoAY4kyXlYCymDQZNSd2yWlc_QNfOB8hNa3LLOQNKC8TKYNr6hH23I_2Tobpm6-BfFCsrwQC-H_SjJ4S2nYYLgx3bUrmpdgQ89FldUiN00Q8G7GZ0le0JB2g_ymXsSZHu-zdedIzxsRce5nLsuzQMYOLnwIxBNWGPEhvhPSTzjpyWccZYtK9qKsBhgrOOwzqe53M1bBt1Q475NfgMU7IsOWwidNJUsNFfptA5y1boJ3DJsNhfJtG3FVg47asK-rNi609Q6FOwvBDVKavgvydYndNIanXOCpLk_kRiG1bbNWJZzTgpYo9wJwhi4oR5gh1Ki8AJ0zyJIi-Nw5g9n9X-AnuRi-PPYLVNlTzFanC03RZ90zdV-wmJiIuz83_-sMfpjbSVSlNvgITL-rBEpxEQmmAHe8lcEiKKI9ARVVZnH9GHTq6DBToBf55zbjj9S918BEr7sbdH6fdWfhoEap6YQj7iTYX8LrrUGBmyCBZMokJKF5m_Wb8ROQMIDhoTFptRrmq_gzTOd6kG__Y2K3Ey4aCinGnaihHC77SS7wY6g_o1zHxcelLHi-FV3vge8O0Ye4_kIRLiEprQmM4xLqIuhVkZIrzHGCcmgJo6iMnVflI7n7_-emg7XTFwjqesuZ3Ivk_B2tlWpwz-w0A_vghrsIk-gohs6vpj-2ykTfbfhGfk-TiDxczuYG8026fkZx4QkgVB5McBjTLvIdKsZ7NIi_OcFTEBmhVJ7IQsBqRhQh1KAhrmBQ2jmM4g7VDmAS9I7LkR_gymzWUe5Cvdyzx8zyoOEQD_OMO0A0Q7PX93c3F6vse0j2DqTlp6I92dyPhhqCnZSX0nID6egRoJMTrjrAEyVFZ5vq2bFDRTfQdYu8jZChZEGCT7TLtQ6UmtrLQGmgDJoMTKNw2cn7jRl1Iq6WwrsM-G3GPj27rsN_CDm0oD_vJB0I7ReGtCYmAjSOAhR6AAOQAUwGWQqTWttquzB1cqA6sAqFSgzojcZ3zTcSC2MFQeGGvlniKjRrghttSlbEw16HzMTq6lm-ho5QNA5trEwaTimB9RUvdx0kaOFzqY3vj4GFNA7GHShoEbxoBmm9WdgjbGrhdiEhzK-A4v5HB690H2Vw1_UttO73jJvqkJh18p53tW98uStehdzcsXkRdIuGTomlUw25vVi9D7PetWEGnBrr8W9fPhO3Jiwt74_8DePMQsioqEp4SlBU0estdG1pa92M95SnHm5HmKndBjvkOTkDhZ5kUkIrGfRMknsDdY-J7vks-J_e1afTLrC7qNb9HNtv2EyP-DpO_1xekefVfSWCdtvWklfxuRHQ77Y6JFZYDJXNgfxRid33N5MmA15RWgGFZEC5gDgdmIP-uKAYETuk_gd4BR_jCuN0DWzFKBsEkcmhvmwEmp0DHks1G7Cm8VBe8tGXdCbQtrI111K3niZZTrqblvQ2jrAAx3p0-0fJOtpU9QpqCpOgiz-tME7FONrLunUt0TAavHO4bx3OQt1IhsrwfHMnaUj8lg1RObPDZ-RBkc_ZH1ATtZ7Snx1SuejPJJkUwdn954-Djwj8PgMLoD7EaeH8-R2_djF9MEk4PoBof2QN6ORf2yDp_RmYk8TH3evcohHaASnDUAu4E18SJkX7GmXTEQr6B4n5bbB47pGLoCmjw_STshy8uk8rMi_5CEJA-LkKZREsZR_BDV5AGqk8IjGfaIk7I0csKQZk6SF7nDQ5_JbxNAAhSf8g2Ch-URwGufz81E_ld1nW_Rt7AG6zu2fTarv7m4vLw6P9tD9VqaWxlrb1JYuWueH4a1FwOsYwhb49kMQBhRdAIDL8XwJQLEdk1rv0Som24lr9SlkMjGkZfsIft89lBKa1NNQHsQpTlkdLQBiwrCh7wmEPpMJnEBniqZO3wioK1Jcg0ZBiVZx28IND-1cYCspJmpOmaMBwW8k6zY8QZa4Q6nfhrQoPMHXu50eDjPm6pbVWN3lOOTBwob9GvB_mHyTCmpDe8HjCs4a3-gHjWcH1q7LrrRD5RxiIS-DgdsvSFq2HWsrRgSMS76F7QaPxNR8Yd6oA4j1ERq_zPrPc3nJ5NBPO4nYgf2sgd-wj_2yXH0SL7YiWOZE_Y8GzlPPUUkz1rCgNpDnX2N_wjmJxmS_eSx9Nljyayz8YJe06_hJ74XDbyZCp3DYqy7p1O9c47iWiyXLegtVj3nQHDOUZyuOIhaBqDqW_5sX7ELt4m7iF7kLr74_X8qHdwptSYAAA)!

## Install

```
$ npm i -D zipurl
```

## Usage

### In the browser

#### Use locally

```html
<script src="path/to/dist/index.min.js"></script>
<script>
  console.log(zipurl('hello world!')) // H4sIAAAAAAAAA8tIzcnJVyjPL8pJUQQAbcK0AwwAAAA
  console.log(unzipurl('H4sIAAAAAAAAA8tIzcnJVyjPL8pJUQQAbcK0AwwAAAA')) // hello world!
</script>
```

The functions `zipurl()` and `unzipurl()` are available in the global (`window`) scope.

#### Or without installation via CDN

```html
<script src="https://cdn.jsdelivr.net/npm/zipurl@1"></script>
```

#### Or with a bundler

```js
import { zipurl, unzipurl } from 'zipurl'
```

### In Node.js

#### With ESM

```js
import { zipurl, unzipurl } from 'zipurl'

console.log(zipurl('hello world!')) // H4sIAAAAAAAAA8tIzcnJVyjPL8pJUQQAbcK0AwwAAAA
console.log(unzipurl('H4sIAAAAAAAAA8tIzcnJVyjPL8pJUQQAbcK0AwwAAAA')) // hello world!
```

#### With CJS

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

```js
const a = JSON.stringify(`{"students":[{"name":"Jack","age":17},{"name":"Jill","age":16},
{"name":"Sue","age":16}],"class":"math"}`)

console.log(a.length) // 103 bytes
console.log(encodeURIComponent(a).length) // 199 bytes
console.log(zipurl(a).length) // 116 bytes

// Let's try something bigger (3122 bytes)
const b =
  JSON.stringify(`{"shaderStatements":[{"output":"b","outputSwizzle":"zxyw","assignmentOperator":"-=",
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
"z":0.658},{"x":0.9,"y":0.855,"z":0.917},{"x":0.797,"y":0.882,"z":0.478}],"saveListIndex":-1,"uniqueID":361315861}`)

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

# zipurl

> Generate **gzip** web-safe strings. Built in 10 minutes. :smile:

Dead simple mash-up of [pako](https://github.com/nodeca/pako) and [js-base64](https://github.com/dankogai/js-base64) to
create **gzipped** URL-safe base64 strings from any data on the browser. Very useful for passing large datasets via
shareable web links.

45kb minified, 14kb **gzipped**, pun not intended.

## Install

Install the node package with npm or yarn.

```
$ npm install zipurl
```

## Usage

### In the browser

#### Use locally

```html
<script src="zipurl.min.js"></script>
```

#### Or without installation via CDN

```html
<script src="https://cdn.jsdelivr.net/npm/zipurl@0/zipurl.min.js"></script>
```

The functions `zipurl()` and `unzipurl()` will be available in the global (window) scope.

#### Or with a bundler

```js
import { zipurl, unzipurl } from 'zipurl'
```

### In Node.js

```js
const { zipurl, unzipurl } = require('zipurl')
```

## Encoding/decoding

```js
zipurl('hello world!') // H4sIAAAAAAAAA8tIzcnJVyjPL8pJUQQAbcK0AwwAAAA

unzipurl('H4sIAAAAAAAAA8tIzcnJVyjPL8pJUQQAbcK0AwwAAAA') // hello world!
```

That's it!

Ok, so, it works much better with larger datasets.

```js
const a = JSON.stringify(`{"students":[{"name":"Jack","age":17},{"name":"Jill","age":16},
{"name":"Sue","age":16}],"class":"math"}`)

console.log(a.length) // 103 bytes
console.log(encodeURIComponent(a).length) // 199 bytes
console.log(zipurl(a).length) // 116 bytes

// Let's try something bigger (3122 bytes)
const b = JSON.stringify(`{"shaderStatements":[{"output":"b","outputSwizzle":"zxyw","assignmentOperator":"-=",
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
"uvScaleY":-1.143,"rotate":0,"usePalette":0,"paletteColors":[{"x":0.041,"y":0.01,"z":0.584},{"x":0.131,"y":0.102,"z":0.
658},{"x":0.9,"y":0.855,"z":0.917},{"x":0.797,"y":0.882,"z":0.478}],"saveListIndex":-1,"uniqueID":361315861}`)

console.log(encodeURIComponent(b).length) // 4952 bytes
console.log(zipurl(b).length) // 1120 bytes - 77.4% reduction in size :)
```

## Google Apps Script

If you're using GAS somewhere along your pipeline, `zipurl` is supported natively (kindof).

Here's the gist:

```js
function zipurl(data) {
  var blob = Utilities.gzip(Utilities.newBlob(data));
  return Utilities.base64EncodeWebSafe(blob.getBytes());
}

function unzipurl(data) {
  var blob = Utilities.newBlob(Utilities.base64DecodeWebSafe(data)).setContentType('application/x-gzip');
  return Utilities.ungzip(blob).getDataAsString();
}
```

And the outputs should be binary-equivalent to that of this package.

## License

ISC

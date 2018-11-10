// mucko Base range.js

var boot = require("./boot.js")
let nothing = boot.nothing


function _range(start, {step=1, stop=nothing}) {
  // https://github.com/d3/d3-array/blob/master/src/range.js
  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }
  return range
}


module.exports = {
    range: _range,
}

// mucko base/abstractarraymath.js

var boot = require("./boot.js")
var strings = require("./strings.js")


function repeat(A, counts) {
    return Array.apply(null, { length: counts * A.length })
                .map(function (e, i) { return A[i % A.length] })
}


module.exports = {
    repeat,
}

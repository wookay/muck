// mucko base/abstractarray.js

var boot = require("./boot.js")
var strings = require("./strings.js")


function isempty(A) {
    return A.length == 0
}

function getindex(A, I) {
    let BoundsError = boot.BoundsError
    let string = strings.string
    if (isempty(A)) {
        throw new BoundsError(string("BoundsError", ": attempt to access 0-element at index [", I, "]"))
    }
    return A[I-1]
}

function first(a) {
    return getindex(a, 1)
}


module.exports = {
    isempty,
    getindex,
    first,
}

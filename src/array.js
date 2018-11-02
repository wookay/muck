// mucko Base array.js

var meta = require("./Meta.js")
var Meta = meta.Meta


function push(a, item) {
    a.push(item)
}

function pushfirst(a, item) {
    a.unshift(item)
}

function splice(a, i, replacement=[]) {
    if (Meta.typeof(replacement) === Array) {
       return Array.prototype.splice.apply(a, [i, 1].concat(replacement))
    } else {
       return a.splice(i, 1, replacement)
    }
}


module.exports = {
    push,
    pushfirst,
    splice,
}

// mucko Base array.js

function get_arrays() {
    var metas = require("./metas.js")
    arrays = {
    pushI: function (a, item) {
        a.push(item)
    },
    
    pushfirstI: function (a, item) {
        a.unshift(item)
    },
    
    spliceI: function (a, i, replacement=[]) {
        if (metas.typeof(replacement) === Array) {
           return Array.prototype.splice.apply(a, [i, 1].concat(replacement))
        } else {
           return a.splice(i, 1, replacement)
        }
    },
    
    map: function (f, a) {
        return a.map(f)
    },
    }

    return arrays
}


module.exports = get_arrays()

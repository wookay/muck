// mucko Base float.js

var boot = require("./boot.js")


Inf = Infinity

function round(typ, x) {
    let Int = boot.Int
    let Float64 = boot.Float64
    switch (typ) {
    case Int:
        return Math.round(x)
    }
}


module.exports = {
    Inf,
    round,
}

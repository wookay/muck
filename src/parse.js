// mucko Base parse.js

var boot = require("./boot.js")


function parse(typ, str) {
    let Int = boot.Int
    let Float64 = boot.Float64
    switch (typ) {
    case Int:
       return parseInt(str)
    case Float64:
       return parseFloat(str)
    }
}


module.exports = {
    parse,
}

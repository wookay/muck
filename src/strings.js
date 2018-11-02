// mucko Base strings.js

var meta = require("./Meta.js")
var boot = require("./boot.js")
var Meta = meta.Meta


function _String(buf) {
    if (typeof Buffer === "undefined") {
        return new TextDecoder('utf8').decode(buf)
    } else {
        return Buffer.from(buf).toString('utf8')
    }
}

function string() {
    let DataType = boot.DataType
    var out = '';
    for (var i=0; i < arguments.length; i++) {
        let x = arguments[i];
        if (Meta.typeof(x) == DataType) {
            out += x.name;
        } else {
            out += x;
        }
    }
    return out;
}

function repr(x) {
    let typ = typeof(x);
    let quot = '"';
    switch (typ) {
    case "string": return string(quot, x, quot);
    default: return string(x);
    }
}


module.exports = {
    String: _String,
    string,
    repr,
}

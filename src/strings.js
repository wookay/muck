// mucko base/strings.js

function get_strings() {
    var boot = require("./boot.js")
    var metas = require("./metas.js")
    
    strings = {
    String: function (buf) {
        if (typeof Buffer === "undefined") {
            return new TextDecoder('utf8').decode(buf)
        } else {
            return Buffer.from(buf).toString('utf8')
        }
    },
    
    string: function () {
        let DataType = boot.DataType
        var out = '';
        for (var i=0; i < arguments.length; i++) {
            let x = arguments[i];
            if (metas.typeof(x) == DataType) {
                out += x.name;
            } else {
                out += x;
            }
        }
        return out;
    },
    
    split: function (str, dlm) {
        return str.split(dlm)
    },
    
    join: function (strings, delim) {
        if (metas.isundef(delim)) {
            return strings.join("")
        } else {
            return strings.join(delim)
        }
    },

    strip: function (s) { 
        return s.trim()
    },
    
    repr: function (x) {
        let typ = typeof(x);
        let quot = '"';
        switch (typ) {
        case "string": return string(quot, x, quot);
        default: return string(x);
        }
    }
    }

    return strings
}


module.exports = get_strings()

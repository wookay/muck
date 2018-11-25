// mucko metas.js

function get_metas() {
    var boot = require("./boot.js")
    metas = {

    isa: function (x, typ) {
        return this.typeof(x) === typ || x instanceof typ
    }, // isa

    typeof: function (x) {
        let DataType = boot.DataType
        let Undefined = boot.Undefined
        let Null = boot.Null

        let typ = typeof(x)
        switch (typ) {
        case "string": return String
        case "number": return Number
        case "boolean": return Boolean
        case "undefined": return Undefined
        default: break
        }

        switch (x) {
        case String: return DataType
        case Number: return DataType
        case Boolean: return DataType
        case Object: return DataType
        case Function: return DataType
        case Array: return DataType
        case Undefined: return DataType
        default: break
        }

        switch (typ) {
        case "function": return Function
        default: break
        }

        if ("object" === typ) {
        switch (x) {
        case null: return Null
        default: return x.constructor
        }
        } // if "object" === typ

        return typ
    }, // typeof

    isundef: function(x) {
        return x === undefined
    }, // isundef

    body: function (f) {
        if (this.typeof(f) === Function) {
            str = f.toString()
            return str.substring(str.indexOf('{')+1, str.lastIndexOf('}')).trim()
        } else {
            throw new boot.Exception("Not a Function")
        }
    }, // body

    }
    return metas
}


module.exports = get_metas()

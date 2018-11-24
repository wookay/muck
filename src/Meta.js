// mucko Meta.js

function get_meta() {
    var boot = require("./boot.js")
    let DataType = boot.DataType
    let Undefined = boot.Undefined
    let Exception = boot.Exception
    let Null = boot.Null
    Meta = {
        // Meta.isa
        isa: function(x, typ) {
            return this.typeof(x) === typ || x instanceof typ
        },

        // Meta.isundef
        isundef: function(x) {
            return x === undefined
        },

        // Meta.typeof
        typeof: function(x) {
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
        },

        // Meta.body
        body: function (f) {
            if (this.typeof(f) === Function) {
                str = f.toString()
                return str.substring(str.indexOf('{')+1, str.lastIndexOf('}')).trim()
            } else {
                throw new Exception("Not a Function")
            }
        }
    }
    return Meta
}


module.exports = {
    Meta: get_meta(),
}

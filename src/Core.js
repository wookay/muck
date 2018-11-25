// mucko Core.js

function get_core() {
    var boot = require("./boot.js")
    var strings = require("./strings.js")
    var metas = require("./metas.js")
    var Core = {
        // -- boot
        DataType: boot.DataType,           // JL Core.DataType
        Undefined: boot.Undefined,         // Core.Undefined
        Null: boot.Null,                   // Core.Null
        Nothing: boot.Nothing,             // JL Core.Nothing
        nothing: boot.nothing,             // JL Core.nothing
        Bool: boot.Bool,                   // JL Core.Bool
        Int: boot.Int,                     // JL Core.Int
        Float64: boot.Float64,             // JL Core.Float64
        Exception: boot.Exception,         // JL Core.Exception
        BoundsError: boot.BoundsError,     // JL Core.BoundsError

        // -- strings
        String: strings.String,            // JL Core.String

        // -- metas
        isa: metas.isa,                    // JL Core.isa
        typeof: metas.typeof,              // JL Core.typeof
    }
    return Core
}


module.exports = get_core()

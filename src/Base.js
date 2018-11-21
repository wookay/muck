// mucko Base.js

function get_base() {
    var boot = require("./boot.js")
    var coreio = require("./coreio.js")
    var strings = require("./strings.js")
    var ranges = require("./range.js")
    var floats = require("./float.js")
    var arrays = require("./array.js")
    var parsing = require("./parse.js")
    Base = {
        // -- boot
        DataType: boot.DataType,     // Base.DataType
        Undefined: boot.Undefined,   // Base.Undefined
        Null: boot.Null,             // Base.Null
        Nothing: boot.Nothing,       // Base.Nothing
        nothing: boot.nothing,       // Base.nothing
        Bool: boot.Bool,             // Base.Bool
        Int: boot.Int,               // Base.Int
        Float64: boot.Float64,       // Base.Float64

        // -- coreio
        println: coreio.println,     // Base.println
        IOBuffer: coreio.IOBuffer,   // Base.IOBuffer
        seekstart: coreio.seekstart, // Base.seekstart
        read: coreio.read,           // Base.read
        stdout: coreio.stdout,       // Base.stdout

        // -- strings
        String: strings.String,      // Base.String
        string: strings.string,      // Base.string
        repr: strings.repr,          // Base.repr

        // -- range
        range: ranges.range,         // Base.range

        // -- float
        Inf: floats.Inf,             // Base.Inf

        // -- array
        push: arrays.push,           // Base.push
        pushfirst: arrays.pushfirst, // Base.pushfirst
        splice: arrays.splice,       // Base.splice
        map: arrays.map,             // Base.map

        // -- parse
        parse: parsing.parse,        // Base.parse
    }
    return Base
}


module.exports = {
    Base: get_base(),
}

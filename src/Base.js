// mucko Base.js

function get_base() {
    var boot = require("./boot.js")
    var coreio = require("./coreio.js")
    var strings = require("./strings.js")
    var ranges = require("./range.js")
    var floats = require("./float.js")
    var abstractarrays = require("./abstractarray.js")
    var arrays = require("./array.js")
    var parsing = require("./parse.js")
    Base = {
        // -- boot
        DataType: boot.DataType,           // JL Base.DataType
        Undefined: boot.Undefined,         // Base.Undefined
        Null: boot.Null,                   // Base.Null
        Nothing: boot.Nothing,             // JL Base.Nothing
        nothing: boot.nothing,             // JL Base.nothing
        Bool: boot.Bool,                   // JL Base.Bool
        Int: boot.Int,                     // JL Base.Int
        Float64: boot.Float64,             // JL Base.Float64
        Exception: boot.Exception,         // JL Base.Exception
        BoundsError: boot.BoundsError,     // JL Base.BoundsError

        // -- coreio
        println: coreio.println,           // JL Base.println
        IOBuffer: coreio.IOBuffer,         // JL Base.IOBuffer
        seekstart: coreio.seekstart,       // JL Base.seekstart
        read: coreio.read,                 // JL Base.read
        stdout: coreio.stdout,             // JL Base.stdout

        // -- strings
        String: strings.String,            // JL Base.String
        string: strings.string,            // JL Base.string
        split: strings.split,              // JL Base.split
        join: strings.join,                // JL Base.join
        repr: strings.repr,                // JL Base.repr

        // -- range
        range: ranges.range,               // JL Base.range

        // -- float
        Inf: floats.Inf,                   // JL Base.Inf
        round: floats.round,               // JL Base.round

        // -- abstractarray
        isempty: abstractarrays.isempty,   // JL Base.isempty
        getindex: abstractarrays.getindex, // JL Base.getindex
        first: abstractarrays.first,       // JL Base.first

        // -- array
        push: arrays.push,                 // JL Base.push
        pushfirst: arrays.pushfirst,       // JL Base.pushfirst
        splice: arrays.splice,             // JL Base.splice
        map: arrays.map,                   // JL Base.map

        // -- parse
        parse: parsing.parse,              // JL Base.parse
    }
    return Base
}


module.exports = {
    Base: get_base(),
}

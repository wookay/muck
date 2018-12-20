// mucko Base.js


function get_base() {
    var coreio = require("./coreio.js")
    var strings = require("./strings.js")
    var ranges = require("./range.js")
    var floats = require("./float.js")
    var abstractarrays = require("./abstractarray.js")
    var abstractarraymath = require("./abstractarraymath.js")
    var abstractdicts = require("./abstractdict.js")
    var arrays = require("./array.js")
    var parsing = require("./parse.js")
    var Base = {
        // -- coreio
        println: coreio.println,           // JL Base.println
        IOBuffer: coreio.IOBuffer,         // JL Base.IOBuffer
        seekstart: coreio.seekstart,       // JL Base.seekstart
        read: coreio.read,                 // JL Base.read
        stdout: coreio.stdout,             // JL Base.stdout

        // -- strings
        string: strings.string,            // JL Base.string
        split: strings.split,              // JL Base.split
        join: strings.join,                // JL Base.join
        repr: strings.repr,                // JL Base.repr
        strip: strings.strip,              // JL Base.strip

        // -- range
        range: ranges.range,               // JL Base.range

        // -- float
        Inf: floats.Inf,                   // JL Base.Inf
        round: floats.round,               // JL Base.round

        // -- abstractarray
        isempty: abstractarrays.isempty,   // JL Base.isempty
        getindex: abstractarrays.getindex, // JL Base.getindex
        first: abstractarrays.first,       // JL Base.first

        // -- abstractarraymath
        repeat: abstractarraymath.repeat,  // JL Base.repeat

        // -- abstractdict
        mergeI: abstractdicts.mergeI,      // JL Base.merge!

        // -- array
        pushI: arrays.pushI,               // JL Base.push!
        pushfirstI: arrays.pushfirstI,     // JL Base.pushfirst!
        spliceI: arrays.spliceI,           // JL Base.splice!
        map: arrays.map,                   // JL Base.map

        // -- parse
        parse: parsing.parse,              // JL Base.parse
    }
    var Core = require("./Core.js")
    var Meta = require("./Meta.js")
    var Sys = require("./Sys.js")
    Base.mergeI(Base, Core)
    Base.Core = Core
    Base.Meta = Meta
    Base.Sys = Sys
    return Base
}


module.exports = get_base()

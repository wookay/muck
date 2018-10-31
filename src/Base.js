// mucko Base.js

var meta = require("./Meta.js")
var Meta = meta.Meta
var strings = require("./strings.js")


function IOBuffer() {
    this.data = new Uint8Array([])
    this.ptr = 0
}
IOBuffer.prototype.constructor = IOBuffer

function TTY() {
}
stdout = new TTY()

function concatBuffer(a, b) {
    var tmp = new Uint8Array(a.byteLength + b.byteLength)
    tmp.set(new Uint8Array(a), 0)
    tmp.set(new Uint8Array(b), a.byteLength)
    return tmp.buffer
}

Base = {
    // Base.println
    println: function(io, ...args) {
        if (Meta.isa(io, IOBuffer)) {
            arr = new TextEncoder().encode(strings.string(args, '\n'))
            io.data = concatBuffer(io.data, arr)
            io.ptr += arr.length
        } else {
            var out = ''
            if (!Meta.isa(io, TTY)) {
                out += io
            }
            for (var i=0; i < args.length; i++) {
                out += args[i]
            }
            console.log(out)
        }
    },

    // Base.IOBuffer
    IOBuffer: IOBuffer,

    // Base.seekstart
    seekstart: function(io) {
        io.ptr = 0
    },

    // Base.read
    read: function(io) {
        len = io.data.byteLength
        arr = io.data.slice(io.ptr, len)
        io.ptr = len
        return arr
    },

    // Base.stdout
    stdout: stdout,

    // Base.String
    String: strings.String,

    // Base.string
    string: strings.string,

    // Base.repr
    repr: strings.repr,
}


module.exports = {
    Base,
}

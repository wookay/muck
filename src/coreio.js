// mucko Base coreio.js

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

function concatBuffer(a, b) {
    var tmp = new Uint8Array(a.byteLength + b.byteLength)
    tmp.set(new Uint8Array(a), 0)
    tmp.set(new Uint8Array(b), a.byteLength)
    return tmp.buffer
}

function println(io, ...args) {
    if (Meta.isa(io, IOBuffer)) {
        arr = new TextEncoder().encode(strings.string(args, '\n'))
        io.data = concatBuffer(io.data, arr)
        io.ptr += arr.length
    } else {
        console.log.apply(console, [io].concat(args))
    }
}

function seekstart(io) {
    io.ptr = 0
}

function read(io) {
    len = io.data.byteLength
    arr = io.data.slice(io.ptr, len)
    io.ptr = len
    return arr
}


module.exports = {
    println,
    IOBuffer,
    seekstart,
    read,
    stdout: new TTY(),
}

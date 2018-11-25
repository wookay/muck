// mucko base/coreio.js

var strings = require("./strings.js")
var metas = require("./metas.js")


function IOBuffer() {
    this.data = new Uint8Array([])
    this.ptr = 0
}
IOBuffer.prototype.constructor = IOBuffer

function TTY() {
}

function println(io, ...args) {
    if (metas.isa(io, IOBuffer)) {
        function concatBuffer(a, b) {
            var tmp = new Uint8Array(a.byteLength + b.byteLength)
            tmp.set(new Uint8Array(a), 0)
            tmp.set(new Uint8Array(b), a.byteLength)
            return tmp.buffer
        }
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

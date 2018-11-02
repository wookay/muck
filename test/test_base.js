// mucko test_base.js

var mucko = require("../index.js")
var Test = mucko.Test
var Base = mucko.Base
var IOBuffer = Base.IOBuffer
var stdout = Base.stdout
var println = Base.println
var seekstart = Base.seekstart
var read = Base.read
var String = Base.String
var range = Base.range
var Inf = Base.Inf


Test.test_base_println = function() {
    buf = new IOBuffer()
    assert_true(Meta.isa(buf, IOBuffer))
    println(buf, "abc")
    seekstart(buf)
    assert_equal("abc\n", String(read(buf)))
    assert_equal("", String(read(buf)))
    println(buf, "xyz")
    seekstart(buf)
    assert_equal("abc\nxyz\n", String(read(buf)))
}

Test.test_base_range = function() {
    r = range(-4, {step:2, stop:5})
    assert_equal([-4,-2,0,2,4], r)
}


Test.test_base_float = function() {
    assert_true(Meta.isa(Inf, Number))
}

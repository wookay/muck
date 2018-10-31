// mucko test_base.js

var mucko = require("../index.js")
var Test = mucko.Test
var Base = mucko.Base
var IOBuffer = Base.IOBuffer
var stdout = Base.stdout
var seekstart = Base.seekstart
var read = Base.read
var String = Base.String

Test.test_base_println = function() {
    buf = new IOBuffer()
    assert_true(Meta.isa(buf, IOBuffer))
    Base.println(buf, "abc")
    seekstart(buf)
    assert_equal("abc\n", String(read(buf)))
    assert_equal("", String(read(buf)))
    Base.println(buf, "xyz")
    seekstart(buf)
    assert_equal("abc\nxyz\n", String(read(buf)))
}

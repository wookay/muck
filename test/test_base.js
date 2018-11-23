// mucko test_base.js

var mucko = require("../index.js")
var Test = mucko.Test
var Base = mucko.Base


Test.test_base_boot = function() {
}

Test.test_base_coreio = function() {
    let IOBuffer = Base.IOBuffer
    let println = Base.println
    let seekstart = Base.seekstart
    let read = Base.read
    let String = Base.String
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

Test.test_base_strings = function() {
}

Test.test_base_range = function() {
    let range = Base.range
    r = range(-4, {step:2, stop:5})
    assert_equal([-4,-2,0,2,4], r)
}

Test.test_base_float = function() {
    let Inf = Base.Inf
    let round = Base.round
    let Int = Base.Int
    assert_true(Meta.isa(Inf, Number))
    assert_equal(round(Int, 3.14), 3)
}

Test.test_base_array = function() {
    let push = Base.push
    a = [1, 2, 3]
    push(a, 5)
    assert_equal([1, 2, 3, 5], a)

    let pushfirst = Base.pushfirst
    a = [1, 2, 3]
    pushfirst(a, 5)
    assert_equal([5, 1, 2, 3], a)

    let splice = Base.splice
    A = [6, 5, 4, 3, 2, 1]
    assert_equal(2, splice(A, 5-1))
    assert_equal([6, 5, 4, 3, 1], A)

    A = [6, 5, 4, 3, 2, 1]
    assert_equal(2, splice(A, 5-1, []))
    assert_equal([6, 5, 4, 3, 1], A)

    A = [6, 5, 4, 3, 2, 1]
    assert_equal(2, splice(A, 5-1, 10))
    assert_equal([6, 5, 4, 3, 10, 1], A)

    A = [6, 5, 4, 3, 2, 1]
    assert_equal(2, splice(A, 5-1, [10, 11]))
    assert_equal([6, 5, 4, 3, 10, 11, 1], A)

    let map = Base.map
    a = map(Number, ["1", "2"])
    assert_equal([1, 2], a)
}

Test.test_base_parse = function() {
    let Int = Base.Int
    let Float64 = Base.Float64
    let parse = Base.parse
    assert_equal(1, parse(Int, "1"))
    assert_equal(1.2, parse(Float64, "1.2"))
}

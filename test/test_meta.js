// mucko test_meta.js

var mucko = require("../index.js")
var Test = mucko.Test
var Meta = mucko.Meta
var Base = mucko.Base


Test.test_meta_typeof = function() {
    let Null = Base.Null
    let Undefined = Base.Undefined
    let DataType = Base.DataType
    let Bool = Base.Bool
    assert_equal(String, String)
    assert_equal(Null, Meta.typeof(null))
    assert_equal(String, Meta.typeof(""))
    assert_equal(Number, Meta.typeof(1))
    assert_equal(Number, Meta.typeof(1.0))
    assert_equal(Number, Meta.typeof(NaN))
    assert_equal(Bool, Meta.typeof(true))
    assert_equal(Object, Meta.typeof(Test))
    assert_equal(Array, Meta.typeof([]))
    assert_equal(Object, Meta.typeof({}))
    assert_equal(Undefined, Meta.typeof(undefined))
    assert_equal(DataType, Meta.typeof(String))
    assert_equal(DataType, Meta.typeof(Number))
    assert_equal(DataType, Meta.typeof(Bool))
    assert_equal(DataType, Meta.typeof(Object))
    assert_equal(DataType, Meta.typeof(Array))
    assert_equal(DataType, Meta.typeof(Function))
    assert_equal(DataType, Meta.typeof(Undefined))
    assert_equal(Function, Meta.typeof(Meta.typeof))
    assert_true(Meta.isa(1, Number))
}

Test.test_meta_string = function() {
    let string = Base.string
    assert_equal("Array", string(Array))
}

Test.test_meta_body = function() {
    let Exception = Base.Exception
    function f() {
        return 1+2
    }
    assert_equal("return 1+2", Meta.body(f))
    test_throws(Exception, function() { Meta.body(1+2) })
    test_throws(new Exception("Not a Function"), function() { Meta.body(1+2) })
}

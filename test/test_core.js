// mucko test_core.js

var mucko = require("../index.js")
var Core = mucko.Core


Test.test_core = function() {
    assert_true(Core.isa(1, Number))
    assert_equal(Core.typeof(1), Number)
}

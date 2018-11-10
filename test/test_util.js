// mucko test_util.js

var mucko = require("../index.js")
var Meta = mucko.Meta
var Test = mucko.Test
var util = mucko.util


Test.test_util_require = function() {
    assert_true(Meta.isa(util.require, Function))
}

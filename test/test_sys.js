// mucko test_sys.js

var mucko = require("../index.js")
var Test = mucko.Test
var Meta = mucko.Meta
var Sys = mucko.Sys


Test.test_sys = function() {
    isbrowser = Sys.isbrowser()
    assert_true(!Meta.isundef(isbrowser))
}

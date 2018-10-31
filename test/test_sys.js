// mucko test_sys.js

var mucko = require("../index.js")
var Test = mucko.Test
var Meta = mucko.Meta
var Sys = mucko.Sys
var Base = mucko.Base
var string = Base.string
var println = Base.println


Test.test_sys = function() {
    isbrowser = Sys.isbrowser()
    assert_true(!Meta.isundef(isbrowser))
}

// mucko test_util.js

var mucko = require("../index.js")
var util = mucko.util


Test.test_util_require = function() {
    assert_equal(mucko.Base.Bool, Boolean)
}

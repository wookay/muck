// mucko test_util.js

var mucko = require("../index.js")
var util = mucko.util


Test.test_util_require = function() {
    var meta = util.require("../src/Meta.js")
    assert_equal(meta.Bool, Boolean)
}

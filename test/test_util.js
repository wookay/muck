// muck test_util.js

var muck = require("../index.js")
var util = muck.util


Test.test_util_require = function() {
    var meta = util.require("../src/Meta.js")
    assert_equal(meta.Bool, Boolean)
}

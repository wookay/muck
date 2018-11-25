// mucko test_core.js

var mucko = require("../index.js")
var Core = mucko.Core
var Base = mucko.Base


Test.test_core = function() {
    assert_true(Core.isa(1, Number))
    assert_equal(Core.typeof(1), Number)

    let Meta = Base.Meta
    let BoundsError = Core.BoundsError
    let Exception = Core.Exception
    assert_true(Meta.isa(new BoundsError(""), Exception))
}

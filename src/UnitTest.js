// mucko UnitTest.js

Test = {}
DOT = "."
LF = "\n"

function print(str) {
  if ('undefined' == typeof(window)) {
    process.stdout.write(str)
  } else {
    document.getElementById('stdout').innerHTML += str
  }
}
function println(str) {
  print(str + LF)
}

function inspect(value) {
  if ('function' == typeof(value)) {
    return value.toString()
  } else {
    return JSON.stringify(value)
  }
}

function deep_equal(a,b) {
  if (a == b) {
    return true
  } else if ('object' == typeof(a) && 'object' == typeof(b)) {
    return inspect(a) == inspect(b)
  } else {
    return false
  }
}

assert_equal = function(expected, got) {
  _assert_equal(expected, got, deep_equal(expected, got))
}

var _assert_equal = function(expected, got, is_true) {
  if (is_true) {
    UnitTest.passed += 1
    if (UnitTest.dot_if_passed) {
      print(DOT)
    } else {
      println('passed: ' + inspect(expected))
    }
  } else {
    println('\nAssertion failed in ' +
         extract_filename_line_from_stack_trace())
    println('Expected: ' + inspect(expected))
    println('Got: ' + inspect(got))
    UnitTest.failed += 1
  }
}

assert_true = function(expected) {
  _assert_true(expected)
}

test_throws = function(errmsg, f) {
    got_the_error = false
    try {
        f()
    } catch (err) {
        var boot = require("./boot.js")
        let Exception = boot.Exception
        if (err instanceof Exception) {
            if (errmsg.message !== undefined) {
                got_the_error = errmsg.message == err.message
            } else {
                got_the_error = true
            }
        } else if (err.prototype instanceof Exception) {
            got_the_error = true
        } else {
        }
    }
    if (!got_the_error) {
        println('\nAssertion failed in ' + f)
        println('Expected: ' + errmsg)
        UnitTest.failed += 1
    }
}

var _assert_true = function(is_true) {
  if (is_true == true) {
    UnitTest.passed += 1
    if (UnitTest.dot_if_passed) {
      print(DOT)
    } else {
      println('passed: ' + true)
    }
  } else {
    println('\nAssertion failed in ' +
         extract_filename_line_from_stack_trace())
    println('Expected: ' + true)
    println('Got: ' + is_true)
    UnitTest.failed += 1
  }
}

var extract_filename_line_from_stack_trace = function() {
  if ('undefined' == typeof(window)) {
    Error.captureStackTrace(Test,
      extract_filename_line_from_stack_trace)
    var line = Test.stack.split(LF).slice(3,4).toString()
    return line.match(/\(.*\/(.*):\d+:*\)/)[1]
  } else {
    return arguments.callee.caller.caller.caller
  }
}


UnitTest = {
  dot_if_passed: true,
  tests: 0,
  passed: 0,
  failed: 0,
  errors: 0,

  run: function(test_target) {
    var startedAt = new Date()
    println('Started')
    for (var test_name in test_target) {
      if (test_name.match(/^test_/)) {
        this.tests += 1
        test_target[test_name]()
      }
    }
    var finishedAt = new Date()
    var elapsed = (finishedAt - startedAt) / 1000
    println('\nFinished in ' + elapsed + ' seconds.')
    this.report()
  },

  report: function() {
    if (this.failed == 0 && this.passed > 0) {
      print("✅  ")
    }
    println(this.tests + ' tests, ' +
      this.passed + ' assertions, ' +
      this.failed + ' failures, ' +
      this.errors + ' errors')
  },
}


module.exports = {
    UnitTest,
    Test,
}

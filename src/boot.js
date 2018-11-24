// mucko Base boot.js

class DataType {
}

class Undefined {
}

class Null {
}

class Nothing {
}

function Int() {
}

function Float64() {
}

class Exception extends Error {

}

class BoundsError extends Exception {
}


module.exports = {
    DataType,
    Undefined,
    Null,
    Nothing,
    nothing: new Nothing(),
    Bool: Boolean,
    Int,
    Float64,
    Exception,
    BoundsError,
}

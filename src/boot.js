// mucko Base boot.js

class DataType {
}

class Undefined {
}

class Null {
}

class Nothing {
}

class Int extends Number {
}

class Float64 extends Number {
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
}

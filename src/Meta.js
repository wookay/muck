// muck Meta.js

class Undefined {
}

class Null {
}

class DataType {
}

Bool = Boolean;

Meta = {
  // Meta.isa
  isa: function(x, typ) {
    return this.typeof(x) === typ;
  },

  // Meta.typeof
  typeof: function(x) {
    let typ = typeof(x);
    switch (typ) {
    case "string": return String;
    case "number": return Number;
    case "boolean": return Boolean;
    case "undefined": return Undefined;
    default: break;
    }

    switch (x) {
    case String: return DataType;
    case Number: return DataType;
    case Boolean: return DataType;
    case Object: return DataType;
    case Function: return DataType;
    case Array: return DataType;
    case Undefined: return DataType;
    default: break;
    }

    switch (typ) {
    case "function": return Function;
    default: break;
    }

    if ("object" === typ) {
    switch (x) {
    case null: return Null;
    default: return x.constructor;
    }
    } // if "object" === typ

    return typ;
  }
}


module.exports = {
    Meta,
    Undefined,
    Null,
    DataType,
    Bool,
}

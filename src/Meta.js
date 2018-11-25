// mucko Meta.js

function get_meta() {
    var metas = require("./metas.js")
    var Meta = {
    isundef: metas.isundef, 
    body: metas.body,
    }
    var abstractdicts = require("./abstractdict.js")
    var Core = require("./Core.js")
    abstractdicts.mergeI(Meta, Core)
    return Meta
}


module.exports = get_meta()

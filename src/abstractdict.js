// mucko base/abstractdict.js


function mergeI(d, others) {
    Object.keys(others).forEach(function(key) {
        d[key] = others[key]
    })
    return d
}


module.exports = {
    mergeI: mergeI,
}

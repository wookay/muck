// mucko Sys.js

Sys = {
    // Sys.isbrowser
    isbrowser: function() {
        return typeof window !== "undefined"
    },
}


module.exports = {
    Sys,
}

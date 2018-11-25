// mucko Sys.js

function get_sys() {
    Sys = {
        // Sys.isbrowser
        isbrowser: function() {
            return typeof window !== "undefined"
        },
    }
    return Sys
}


module.exports = get_sys()

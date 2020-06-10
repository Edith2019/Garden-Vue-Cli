module.exports = {
    // Replace that into Docker ENV Variables....
    production: {
        "cookieSession": {
            "secret": "@#$@%$#^%5"
        }
    },
    development: {
        "cookieSession": {
            "secret": "@#$%$&^%*"
        }
    }
}
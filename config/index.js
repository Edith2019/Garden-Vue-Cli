module.exports = {
    production: {
        "cookieSession": {
            "secret": "@#$@%$#^%5"
        },
        "AWS_KEY": process.env.AWS_KEY,
        "AWS_SECRET": process.env.AWS_SECRET
    },
    development: {
        "cookieSession": {
            "secret": "@#$%$&^%*"
        },
        "AWS_KEY": process.env.AWS_KEY,
        "AWS_SECRET": process.env.AWS_SECRET
    }
};
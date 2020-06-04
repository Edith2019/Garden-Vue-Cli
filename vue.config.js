// vue.config.js
module.exports = {
    // options...
    lintOnSave: false,
    devServer: {
        proxy: 'http://localhost:8080/',
        disableHostCheck: true,

    }
}
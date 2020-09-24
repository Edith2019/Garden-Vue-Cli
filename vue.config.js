// vue.config.js
module.exports = {
    // options...
    lintOnSave: false,
    devServer: {
        proxy: "http://localhost:8080/",
        disableHostCheck: true,
        port: "https://vgg-nkln.herokuapp.com/",
        // overlay: {
        //     warnings: true,
        //     errors: true
        // }

    }
};
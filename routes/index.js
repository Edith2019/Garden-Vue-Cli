const contactRoute = require("./contactRoute");

module.exports = (app) => {
    app.use("/contact", contactRoute);
};


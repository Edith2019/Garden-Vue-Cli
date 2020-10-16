const contactRoute = require("./contactRoute");
const cookieRoute = require("./cookieRoute")
module.exports = (app) => {
    app.use("/contact", contactRoute);
};

module.exports = (app) => {
    app.use("/cookie", cookieRoute)
}


const express = require("express");
const config = require("./config");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const routes = require("./routes");
const cookieSession = require("cookie-session");

const csurf = require('csurf');
app.use(express.static("./dist"));
app.use(cors());
app.use(bodyParser.json());

let secret = config[process.env.NODE_ENV || "development"].cookieSession.secret;

app.use((req, res, next) => {
    res.set("x-frame-options", "DENY");
    res.locals.csrfToken = req.csrfToken;
    next();
});

app.use(
    cookieSession({
        secret,
        maxAge: 1000 * 60 * 60 * 24 * 14

    })

);

app.use(csurf());

app.use(function (req, res, next) {
    res.cookie("mytoken", req.csrfToken());
    next();
});

routes(app);

// We have two router (Server,Client) and we need to use VUE.js Route  so we forwared the request into Client router..
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./dist/index.html"));
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});

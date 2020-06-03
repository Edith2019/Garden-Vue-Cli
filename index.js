const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./utils/db');
const app = express();
const ses = require('./utils/ses');
const cookieSession = require('cookie-session');
// const csurf = require('csurf');
app.use(express.static('./public'));
app.use(cors());
app.use(bodyParser.json());


let secrets;
process.env.NODE_ENV === "production"
    ? (secrets = process.env)
    : (secrets = require("./utils/secrets"));
app.use(
    cookieSession({
        secret: `${secrets.cookieSession.secret}`,
        maxAge: 1000 * 60 * 60 * 24 * 14
    })
);

//////Csurf //////////
// app.use(csurf());

// app.use(function (req, res, next) {
//     res.cookie('mytoken', req.csrfToken()); // put the current value of csrf token
//     next();
// });


app.post("/submit", (req, res) => {

    const first = req.body.first;
    const last = req.body.last;
    const email = req.body.email;
    const message = req.body.message;

    db.postSubmit(first, last, email, message).then(result => {
        console.log("response", result);
        if (result.rows[0].message) {
            const sender = JSON.stringify(result.rows[0]);
            ses.sendEmail('edith.chevallier3000@gmail.com', 'Email from  garden', sender)
                .then(() => {
                    res.json({
                        success: true
                    });
                    console.log("it works weell");
                }).catch(err => {
                    console.log("there was an error in message", err);
                    res.json({ error: true });
                });
        }
        const data = result.rows[0];
        res.json({ data });
    }).catch(err => {
        console.log("there was an error in message", err);
        res.json({ error: true });
    });
    // req.session = null;
});



const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});

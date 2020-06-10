// const express = require('express');

// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();
// const routes = require('./routes');
// const cookieSession = require('cookie-session');
// // const csurf = require('csurf');
// app.use(express.static('./dist'));
// app.use(cors());
// app.use(bodyParser.json());


// let secrets;
// process.env.NODE_ENV === "production"
//     ? (secrets = process.env)
//     : (secrets = require("./utils/secrets"));
// app.use(
//     cookieSession({
//         secret: `${secrets.cookieSession.secret}`,
//         maxAge: 1000 * 60 * 60 * 24 * 14
//     })
// );

// routes(app);




// const port = process.env.PORT || 4000;
// app.listen(port, () => {
//     console.log(`listening on ${port}`);
// });

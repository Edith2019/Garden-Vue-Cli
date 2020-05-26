const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/jokes/random', (req, res) => {
    request(
        { url: 'https://joke-api-strict-cors.appspot.com/jokes/random' },
        (error, response, body) => {
            if (error || response.statusCode !== 200) {
                return res.status(500).json({ type: 'error', message: err.message });
            }

            res.json(JSON.parse(body));
        }
    )
});

// // const server = require('http').Server(app);
// // const port = process.env.PORT || 8080;
// const db = require('./utils/db');
// const csurf = require('csurf');

// app.use(express.static('./public'));

// app.use(express.json());
// const ses = require('./utils/ses');
// const request = require('request');

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// });

// app.get('/jokes/random', (req, res) => {
//     request(
//         { url: 'https://joke-api-strict-cors.appspot.com/jokes/random' },
//         (error, response, body) => {
//             if (error || response.statusCode !== 200) {
//                 return res.status(500).json({ type: 'error', message: err.message });
//             }

//             res.json(JSON.parse(body));
//         }
//     )
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));



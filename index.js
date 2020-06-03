const express = require('express');
const cors = require('cors');
console.log("cors", cors);
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     res.json({
//         message: 'Behold The MEVN Stack!'
//     });
// });


app.post("http://localhost:8080/submit", (req, res) => {
    console.log("made it to post route");
    console.log("req.header", req.headers)
})

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});

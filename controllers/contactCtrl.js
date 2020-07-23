const contactSvs = require('../services/contactSvs');
const ses = require('../utils/ses');
const submit = async (req, res) => {
    try {
        console.log("lllll");

        const { first, last, email, message } = req.body;
        const result = await contactSvs.submit(first, last, email, message);
        console.log("here");

        //if (result.rows[0].message) {
        const sender = JSON.stringify(result.rows[0]);

        const rs = await ses.sendEmail('edith.chevallier3000@gmail.com', 'Email from  garden', sender)
        console.log(rs);
        //}
        // const data = 
        res.json(
            result.rows[0]
        );
    } catch (err) {
        console.log(err);
        res.json({ error: true, err });
    }
}


module.exports = {
    submit
}
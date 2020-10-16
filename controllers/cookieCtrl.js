const cookieSvs = require("../services/cookieSvs");
const cookiePost = async (req, res) => {
    console.log("req.param", req.param)
    console.log("req.body", req.body)
    try {
        console.log("req.param", req.param)
        console.log("req.body", req.body)
    } catch (err) {
        console.error(err);
    }
    // try {
    //     const { first, last, email, message } = req.body;
    //     const result = await contactSvs.submit(first, last, email, message);
    //     console.log("result", result)

    //     const sender = JSON.stringify(result.rows[0]);
    //     console.log("sender", sender)
    //     const rs = await ses.sendEmail("edith.chevallier3000@gmail.com", "Email from  garden", sender);
    //     console.log(rs)

    //     res.json(
    //         result.rows[0]
    //     );
    // } catch (err) {
    //     console.error(err);
    //     res.json({ error: true, err });
    // }
};

module.exports = {
    cookiePost
};
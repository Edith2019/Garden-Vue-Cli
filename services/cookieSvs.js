const db = require("../utils/db");





const cookiePost = async (csrfToken) => {
    console.log("first in contact", csrfToken)
    return await db.postCookieAgreement(csrfToken);
    // return;
};



module.exports = { cookiePost };
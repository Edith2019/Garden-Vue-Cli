const db = require("../utils/db");

const submit = async (first, last, email, message) => {
    console.log("first in contact", first)
    return await db.postSubmit(first, last, email, message);
    // return;
};



module.exports = { submit };
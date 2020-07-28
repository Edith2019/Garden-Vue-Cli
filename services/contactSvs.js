const db = require("../utils/db");

const submit = async (first, last, email, message) => {
    await db.postSubmit(first, last, email, message);
    return;
};

module.exports = { submit };
const db = require('../utils/db');

const submit = async (first, last, email, message) => {
    return await db.postSubmit(first, last, email, message)
}


module.exports = { submit }
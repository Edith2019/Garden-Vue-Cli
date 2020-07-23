const spicedPg = require("spiced-pg");

const db = spicedPg(
    process.env.DATABASE_URL ||
    "postgres:postgres:postgres@localhost:5432/garden"
);

module.exports.postSubmit = (first, last, email, message) => {
    const q = ` INSERT INTO garden (first, last, email, message)
    VALUES ($1, $2, $3, $4)
    RETURNING *`;

    const params = [first, last, email, message];
    return db.query(q, params);
}


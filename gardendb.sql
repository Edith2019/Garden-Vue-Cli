
DROP TABLE IF EXISTS garden;

CREATE TABLE garden (
    id SERIAL primary key,
    first VARCHAR(255) NOT NULL,
    last VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    cookie  VARCHAR(255),

);


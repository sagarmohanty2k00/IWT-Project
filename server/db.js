const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'Ther00t@sagar2000',
    host: 'localhost',
    post: 5432,
    database: 'quizsense' 
});

module.exports = pool;
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'novel_api_db',
    password: 'postgres123',
    port: 5432,
});

module.exports = pool;
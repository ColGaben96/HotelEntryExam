var mysql = require("mysql");
const config = {
    host: 'localhost',
    user: 'hotelify',
    password: 'Hotelify*2021',
    database: 'hotelify_db'
};

const pool = mysql.createPool(config);

module.exports = pool;
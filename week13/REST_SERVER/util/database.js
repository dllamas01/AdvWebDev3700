const mysql = require("mysql2");


// Create a connection pool

const pool = mysql.createPool({
    // host : 'localhost',
    host : '45.55.136.114',
    user : 'F2023_dllamas01',
    // database : 'node-complete',
    database : 'F2023_dllamas01',
    password: "AmericanC00per!"
});

module.exports = pool.promise();
module.exports = pool.promise();
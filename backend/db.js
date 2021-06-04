const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "rabkailzanTB_123",
    host: "localhost",
    port: 5432, 
    database: "notesemaildb"
});


module.exports = pool;
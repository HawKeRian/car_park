
require("dotenv").config();
const { Client } = require('pg');

const client = new Client({
    user: process.env.PGUSER,
    host:  process.env.PGHOST,
    database:  process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
});
    client.connect();
    
var Floor5 = async() => {
    try {
        var Items = await client.query(`SELECT * FROM mtlcarpark.floor5`)

        return { success: true, data: Items }
    } catch (error) {
        return { success: false, data: null }
    }
}

module.exports = Floor5
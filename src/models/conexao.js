const mysql = require('mysql2')
const dotenv = require('dotenv')
 
dotenv.config()


const conexao = mysql.createPool({
    host: process.env.mysql_host,
    user: process.env.mysql_user,
    password: process.env.mysql_password,
    database: process.env.mysql_db,
})

module.exports = conexao
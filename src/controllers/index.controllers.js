const { Pool } = require("pg");

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: true
})

const getCodigos = async (req, res) => {
    const respuesta = await pool.query('SELECT * FROM codigos');
    res.status(200).json(respuesta.rows);
}

const createCodigo = async (req, res) => {
    
}

module.exports = {
    getCodigos, createCodigo}
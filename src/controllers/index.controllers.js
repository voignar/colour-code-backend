const { Pool } = require("pg");

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: true
})

const getCodigos = async (req, res) => {
    const { pagina, cantidad } = req.body;
    console.log(pagina, cantidad);
    let respuesta;
    if(!pagina && !cantidad){
        respuesta = await pool.query('SELECT * FROM codigos ORDER BY puntuacion DESC LIMIT 10');
    }else{
        console.log(pagina, cantidad);
        respuesta = await pool.query('SELECT * FROM codigos ORDER BY puntuacion DESC LIMIT $1 OFFSET $2', [cantidad, pagina*cantidad]);
    }
    res.status(200).json(respuesta.rows);
}

const createCodigo = async (req, res) => {
    let { codigo, puntuacion } = req.body;
    if(puntuacion > 0){
        puntuacion = 1;
    }else{
        puntuacion = -1;
    }
    const respuesta1 = await pool.query("SELECT * FROM codigos WHERE codigo = $1", [codigo]);
    if (respuesta1.rowCount > 0) {
        await pool.query("UPDATE codigos SET puntuacion = puntuacion + $1, votos = votos + 1 WHERE codigo = $2", [puntuacion, codigo]);
    }else{
        await pool.query('INSERT INTO codigos (codigo, puntuacion, votos) VALUES ($1, $2, 1)', [codigo, puntuacion]);
    }
    
    res.send("usuario creado");
}

module.exports = {
    getCodigos, createCodigo}
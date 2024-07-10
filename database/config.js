import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "1528",
    database: "joyas",
    allowExitOnIdle: true,
})

pool.query("SELECT NOW()", (err, res) => {
if(err) {
    console.log("Error conectando a la Database:", err);
} else {
    console.log("Database conectada!", res.rows[0].now);
    }
});


export default pool;



// Importazione mysql2
const mysql = require(`mysql2`);

// Creazione variabile per connettere il database
const connection = mysql.createConnection({
    host: `localhost`,
    user: `root`,
    password: `Nosleep1`,
    database: `db_blog`
});

// Utilizzo la variabile per stabilire la connessione con il database
connection.connect(() => {
    if (err) console.log(err);
    console.log(`Connected to mysql`)
})

module.exports = connection;

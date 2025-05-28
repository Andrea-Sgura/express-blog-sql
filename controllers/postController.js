// Recupero la variabile di connessione al database
const connection = require(`../data/db`)

// Inserimento metodo controller: index
const index = (req, res) => {
    // Inserimento query per recuperare i post dal database
    const sql = "SELECT * FROM posts"

    // Esecuzione della query con metodo query della variabile connection
    connection.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Database query failed" })
        }

        res.json(result)
    })
};

module.exports = {
    index
}
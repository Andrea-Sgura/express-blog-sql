// Recupero la variabile di connessione al database
const connection = require(`../data/db`)

// Inserimento metodo controller: Index
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

// Inserimento metodo controller: Delete
const destroy = (req, res) => {
    // recupero l'id
    const id = req.params.id;

    // Esecuzione della query con metodo query della variabile connection
    connection.query("DELETE FROM posts WHERE id = ?", [id], (err) => {
        // Eseguo controllo per vedere se ci sono errori
        if (err) return res.status(500).json({ error: "Database query failed: " + err });

        // Restituisco il codice di stato
        res.sendStatus(204)
    })

}

module.exports = {
    index,
    destroy
}
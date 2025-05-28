const express = require(`express`);
const app = express();
const port = 3000;

app.use(express.static(`public`));
app.use(express.json());

// Inserimento rotta base - Entry point
app.get("/", (req, res) => {
    console.log("Server del mio blog")
    res.send("Benvenuto nel mio Blog")
})

// Server in ascolto
app.listen(port, () => {
    console.log(`Server in ascolto alla porta ${port}`)
})
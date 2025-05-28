const express = require(`express`);
const app = express();
const port = 3000;
const blogRouter = require(`./routers/blog`);

app.use(express.static(`public`));
app.use(express.json());

// Inserimento rotta base - Entry point
app.get("/", (req, res) => {
    res.send("Benvenuto nel mio Blog")
})

app.use("/posts", blogRouter);

// Server in ascolto
app.listen(port, () => {
    console.log(`Server in ascolto alla porta ${port}`)
})
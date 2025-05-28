const express = require(`express`);
const router = express.Router();

// Index
router.get(`/`, (req, res) => {
    console.log(`Elenco post`)
})

module.exports = router;
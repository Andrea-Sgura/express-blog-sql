const express = require(`express`);
const router = express.Router();

// Importazione del Controller
const postController = require(`../controllers/postController`)

// Index
router.get(`/`, postController.index);

// Destroy
router.delete(`/:id`, postController.destroy)

module.exports = router;
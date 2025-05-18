const express = require('express');
const router = express.Router();
const treinoController = require("../controllers/treinoController");

router.get('/', treinoController.getTreino);
router.post('/', treinoController.createTreino);
router.put('/:id', treinoController.updateTreino);
router.delete('/:id', treinoController.deleteTreino);

module.exports = router;
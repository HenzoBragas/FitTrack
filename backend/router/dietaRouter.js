const express = require('express');
const router = express.Router();
const dietaController = require("../controllers/dietaController");

router.get('/', dietaController.getDieta);
router.post('/', dietaController.createDieta);
router.put('/:id', dietaController.updateDieta);
router.delete('/:id', dietaController.deleteDieta);

module.exports = router;
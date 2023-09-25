const generatorController = require('../controllers/generator.controller');
const { Router } = require('express');

const router = Router();

router.get('/:numberOfVehicles', generatorController.generateVehicles);

module.exports = router;

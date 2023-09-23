const vehicleController = require('../controllers/vehicles.controller');
const { Router } = require('express');

const router = Router();

router.get('', vehicleController.searchVehicles);

module.exports = router;

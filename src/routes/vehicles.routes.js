const vehicleController = require('../controllers/vehicles.controller');
const { Router } = require('express');

const router = Router();

router.get('', vehicleController.filterVehicles);

module.exports = router;

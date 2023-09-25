const vehicleController = require('../controllers/vehicles.controller');
const { Router } = require('express');

const router = Router();

router.get('', vehicleController.searchVehicles);
router.get('/:id/contact', vehicleController.contactAgencyById);

module.exports = router;

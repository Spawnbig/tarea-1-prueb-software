const defaultController = require('../controllers/default');
const { Router } = require('express');

const router = Router();

router.get('/', defaultController.helloWorld);
router.get('/add-random-cars', defaultController.addRandomCars);
router.get('/cars', defaultController.getCars);

module.exports = router;

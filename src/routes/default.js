const defaultController = require('../controllers/default');
const { Router } = require('express');

const router = Router();

router.get('/', defaultController.getCars);

module.exports = router;

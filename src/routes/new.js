const express = require('express');
const router = express.Router();

const newController = require('../app/controllers/NewControllers');

router.get('/:slug', newController.index);
router.get('/', newController.index);

module.exports = router;

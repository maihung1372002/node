const express = require('express');
const router = express.Router();

const sitesController = require('../app/controllers/SitesControllers');

router.get('/:slug', sitesController.search);

router.get('/search', sitesController.search);
router.get('/', sitesController.home);

module.exports = router;

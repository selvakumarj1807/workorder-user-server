const express = require('express');
const { newTracking, getTracking } = require('../controllers/trackingController');
const router = express.Router();

router.route('/tracking/new').post(newTracking);
router.route('/tracking').get(getTracking);

module.exports = router;
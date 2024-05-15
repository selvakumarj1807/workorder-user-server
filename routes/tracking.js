const express = require('express');
const { newTracking, getTracking, getSingleTracking } = require('../controllers/trackingController');
const router = express.Router();

router.route('/tracking/new').post(newTracking);
router.route('/tracking').get(getTracking);
router.route('/tracking/:id').get(getSingleTracking);

module.exports = router;
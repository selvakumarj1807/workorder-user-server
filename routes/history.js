const express = require('express');
const { newHistory, getHistory } = require('../controllers/historyController');
const router = express.Router();

router.route('/history/new').post(newHistory);
router.route('/history').get(getHistory);

module.exports = router;
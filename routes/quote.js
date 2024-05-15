const express = require('express');
const { newQuote, getQuote, updateQuote, deleteQuote } = require('../controllers/quoteController');
const router = express.Router();

router.route('/quote/new').post(newQuote);
router.route('/quote').get(getQuote);
router.route('/quote/:id').put(updateQuote);
router.route('/quote/:id').delete(deleteQuote);

module.exports = router;
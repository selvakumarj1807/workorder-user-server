const express = require('express');
const { newQuote, getQuote, updateQuote, deleteQuote, getSingleQuote } = require('../controllers/quoteController');
const router = express.Router();

router.route('/quote/new').post(newQuote);
router.route('/quote').get(getQuote);
router.route('/quote/:id').put(updateQuote);
router.route('/quote/:id').delete(deleteQuote);
router.route('/quote/:id').get(getSingleQuote);

module.exports = router;
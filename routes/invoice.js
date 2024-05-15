const express = require('express');
const { newInvoice, getInvoice } = require('../controllers/invoiceController');
const router = express.Router();

router.route('/invoice/new').post(newInvoice);
router.route('/invoice').get(getInvoice);

module.exports = router;
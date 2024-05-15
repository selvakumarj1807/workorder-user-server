const express = require('express');
const { newInvoice, getInvoice, getSingleInvoice } = require('../controllers/invoiceController');
const router = express.Router();

router.route('/invoice/new').post(newInvoice);
router.route('/invoice').get(getInvoice);
router.route('/invoice/:id').get(getSingleInvoice);

module.exports = router;
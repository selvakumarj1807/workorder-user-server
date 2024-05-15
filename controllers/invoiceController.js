const Invoice = require('../models/invoiceModel');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('../middlewares/catchAsyncError');
const APIFeatures = require('../utils/apiFeatures');

//create invoice - /api/v1/invoice/new
exports.newInvoice = catchAsyncError(async (req, res, next) => {
    const invoice = await Invoice.create(req.body);
    res.status(201).json({
        success: true,
        invoice
    })
});

//get invoice - /api/v1/invoice
exports.getInvoice = async (req, res, next) => {
    // const resPerPage = 2;
    // const apiFeatures = new APIFeatures(Product.find(), req.query).search().filter().paginate(resPerPage);
    const apiFeatures = new APIFeatures(Invoice.find(), req.query).search().filter();

    const invoice = await apiFeatures.query;
    res.status(200).json({
        success: true,
        count: invoice.length,
        invoice
    })
}


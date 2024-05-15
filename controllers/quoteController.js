const Quote = require('../models/quoteModel');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('../middlewares/catchAsyncError');
const APIFeatures = require('../utils/apiFeatures');

//create quote - /api/v1/quote/new
exports.newQuote = catchAsyncError(async (req, res, next) => {
    const quote = await Quote.create(req.body);
    res.status(201).json({
        success: true,
        quote
    })
});

//get quote - /api/v1/quote
exports.getQuote = async (req, res, next) => {
    // const resPerPage = 2;
    // const apiFeatures = new APIFeatures(Product.find(), req.query).search().filter().paginate(resPerPage);
    const apiFeatures = new APIFeatures(Quote.find(), req.query).search().filter();

    const quote = await apiFeatures.query;
    res.status(200).json({
        success: true,
        count: quote.length,
        quote
    })
}

//update quote - /api/v1/quote/:id
exports.updateQuote = async (req, res, next) => {
    try {
        let quote = await Quote.findById(req.params.id);

        if (!quote) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        quote = await Quote.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        res.status(200).json({
            success: true,
            quote
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
}

// delete quote - /api/v1/quote/:id
exports.deleteQuote = async (req, res, next) => {
    try {
        const quote = await Quote.findByIdAndDelete(req.params.id);

        if (!quote) {
            return res.status(404).json({
                success: false,
                message: "Quote not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Quote Deleted!"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
}
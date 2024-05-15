const Tracking = require('../models/trackingModel');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('../middlewares/catchAsyncError');
const APIFeatures = require('../utils/apiFeatures');

//create tracking - /api/v1/tracking/new
exports.newTracking = catchAsyncError(async (req, res, next) => {
    const tracking = await Tracking.create(req.body);
    res.status(201).json({
        success: true,
        tracking
    })
});

//get tracking - /api/v1/tracking
exports.getTracking = async (req, res, next) => {
    // const resPerPage = 2;
    // const apiFeatures = new APIFeatures(Product.find(), req.query).search().filter().paginate(resPerPage);
    const apiFeatures = new APIFeatures(Tracking.find(), req.query).search().filter();

    const tracking = await apiFeatures.query;
    res.status(200).json({
        success: true,
        count: tracking.length,
        tracking
    })
}

//get single tracking - /api/v1/tracking/:id
const mongoose = require('mongoose');

exports.getSingleTracking = async (req, res, next) => {
    try {
        const isValidObjectId = mongoose.Types.ObjectId.isValid(req.params.id);
        if (!isValidObjectId) {
            return next(new ErrorHandler(`Resource not found: ${req.params.id}`, 400));
        }

        const tracking = await Tracking.findById(req.params.id);

        if (!tracking) {
            return next(new ErrorHandler('Tracking not found', 404));
        }

        res.status(200).json({
            success: true,
            tracking
        });
    } catch (err) {
        next(err);
    }
};
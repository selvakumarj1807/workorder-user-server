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

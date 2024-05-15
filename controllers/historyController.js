const History = require('../models/historyModel');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('../middlewares/catchAsyncError');
const APIFeatures = require('../utils/apiFeatures');

//create history - /api/v1/history/new
exports.newHistory = catchAsyncError(async (req, res, next) => {
    const history = await History.create(req.body);
    res.status(201).json({
        success: true,
        history
    })
});

//get history - /api/v1/history
exports.getHistory = async (req, res, next) => {
    // const resPerPage = 2;
    // const apiFeatures = new APIFeatures(Product.find(), req.query).search().filter().paginate(resPerPage);
    const apiFeatures = new APIFeatures(History.find(), req.query).search().filter();

    const history = await apiFeatures.query;
    res.status(200).json({
        success: true,
        count: history.length,
        history
    })
}

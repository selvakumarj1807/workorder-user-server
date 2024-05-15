const { request } = require('express');
const mongoose = require('mongoose');

const TrackingModelSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: [true, "Pls enter Product Name"]
    },
    modelNumber: {
        type: String,
        required: [true, "Pls enter model number"]
    },
    status: {
        type: String,
        required: [true, "Pls enter status"],
        enum: {
            values: [
                'Packing',
                'Shipping',
                'Delivery',
            ],
            message: "Pls Select Correct status"
        }
    },
    deliveryTracking: {
        type: String,
        required: [true, "Pls enter delivery tracking"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('Tracking', TrackingModelSchema);

module.exports = schema;
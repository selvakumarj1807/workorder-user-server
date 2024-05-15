const { request } = require('express');
const mongoose = require('mongoose');

const HistoryModelSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: [true, "Pls enter Product Name"]
    },
    company: {
        type: String,
        required: [true, "Pls enter Company"]
    },
    engineCode: {
        type: String,
        required: [true, "Pls enter Engine Code"]
    },
    createDate: {
        type: Date,
        required: [true, "Pls enter Create Date"]
    },
    deliveryDate: {
        type: Date,
        required: [true, "Pls enter Delivery Date"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('History', HistoryModelSchema);

module.exports = schema;
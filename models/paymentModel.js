const { request } = require('express');
const mongoose = require('mongoose');

const PaymentModelSchema = new mongoose.Schema({
    accountHolderName: {
        type: String,
        required: [true, "Pls enter Name"]
    },
    accountNumber: {
        type: String,
        required: [true, "Pls enter Account Number"]
    },
    ifscCode: {
        type: String,
        required: [true, "Pls enter IFSC Code"]
    },
    branchName: {
        type: String,
        required: [true, "Pls enter Branch Name"]
    },
    amount: {
        type: String,
        required: [true, "Pls enter Amount"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('Payment', PaymentModelSchema);

module.exports = schema;
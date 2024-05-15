const { request } = require('express');
const mongoose = require('mongoose');

const InvoiceModelSchema = new mongoose.Schema({
    invoiceNumber: {
        type: String,
        required: [true, "Pls enter Invoice Number"]
    },
    itemDescription: {
        type: String,
        required: [true, "Pls enter item description"]
    },
    quantity: {
        type: String,
        required: [true, "Pls enter Quantity"]
    },
    unitPrice: {
        type: String,
        required: [true, "Pls enter unit price"]
    },
    total: {
        type: String,
        required: [true, "Pls enter total"]
    },
    date: {
        type: Date,
        required: [true, "Pls enter  Date"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('Invoice', InvoiceModelSchema);

module.exports = schema;
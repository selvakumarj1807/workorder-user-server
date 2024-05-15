const { request } = require('express');
const mongoose = require('mongoose');

const QuoteModelSchema = new mongoose.Schema({
    make: {
        type: String,
        required: [true, "Pls enter make Quote"]
    },
    model: {
        type: String,
        required: [true, "Pls enter model Quote"]
    },
    part: {
        type: String,
        required: [true, "Pls enter part Quote"]
    },
    year: {
        type: String,
        required: [true, "Pls enter year Quote"]
    },
    price: {
        type: String,
        required: [true, "Pls enter price Quote"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('Quote', QuoteModelSchema);

module.exports = schema;
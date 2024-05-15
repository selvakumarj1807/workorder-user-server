const { request } = require('express');
const mongoose = require('mongoose');

const EnquiryModelSchema = new mongoose.Schema({
    year: {
        type: Number,
        required: [true, "Pls enter year"]
    },
    make: {
        type: String,
        required: [true, "Pls enter make"]
    },
    model: {
        type: String,
        required: [true, "Pls enter model"]
    },
    contactName: {
        type: String,
        required: [true, "Pls enter contact name"]
    },
    email: {
        type: String,
        required: [true, "Pls enter email"]
    },
    mobileNumber: {
        type: String,
        required: [true, "Pls enter mobile Number"]
    },
    postalCode: {
        type: Number,
        required: [true, "Pls enter postal code"]
    },
    shippingMethod: {
        type: String,
        required: [true, "Pls enter shipping method"],
        enum: {
            values: [
                'option-1',
                'option-2',
                'option-3',
            ],
            message: "Pls Select Correct Method"
        }
    }, 
    state: {
        type: String,
        required: [true, "Pls enter state"]
    },
    additionalNotes : {
        type: String,
        },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('Enquiry', EnquiryModelSchema);

module.exports = schema;
const mongoose = require("mongoose");
const { number } = require('@hapi/joi');

const OrderSchema = mongoose.Schema({
    Address: {
        type: Object,
        required: true
    },
    OrderItems: {
        type: Array,
        required: true
    },
    OrderDate: {
        type: Date,
        default: Date.now
    },
});
module.exports = mongoose.model('Order', OrderSchema);
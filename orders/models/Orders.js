const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    CustomerID:{
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    BookID:{
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    initialDate:{
        type: Date,
        default: Date.now,
    },
    deliveryDate:{
        type: Date,
        required: true
    },
});
module.exports = mongoose.model("Order", orderSchema);
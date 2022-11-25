const { Schema, model } = require("mongoose")

const OrderSchema = new Schema({
    payment:{
        cardNumber: String,
        cardType: String,
        cvv: String,
        expire: String,
        name: String
    },
    direction:{
        address1: String,
        address2: String,
        city: String,
        country: String,
        state: String
    },
    products:[{
        _id: String,
        name: String,
        brand: String,
        price: Number
    }]
})

module.exports = model("order", OrderSchema)
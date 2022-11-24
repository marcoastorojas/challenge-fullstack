const { Schema, model } = require("mongoose")

const ProductSchema = new Schema({
    name: String,
    brand: String,
    price: Number
})

module.exports = model("product", ProductSchema)
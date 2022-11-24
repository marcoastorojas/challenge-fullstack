
const { request, response } = require("express")
const Product = require("../models/Product")
const getProducts = async (req = request, res = response) => {
    try {
        const all = await Product.find()
        res.status(200).json({ all })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const postProduct = async (req = request, res = response) => {
    try {
        const newProduct = await Product.create({
            name: "ejemplo1",
            brand: "ejemplo brand",
            price: 12
        })
        res.status(201).json({ ok: true, newProduct })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


module.exports = {
    getProducts,
    postProduct
}

const { request, response } = require("express")
const Product = require("../models/Product")
const getProducts = async (req = request, res = response) => {
    const { page: pagequery = 1 } = req.query;
    const page = Number(pagequery)
    const limit = 2
    const skip = (Number(page) - 1) * limit
    try {

        const allEntries = await Product.count();
        if (allEntries < skip) { return res.status(400).json({ ok: false, message: `doesnt exist any element in page ${page}` }) }
        const data = await Product.find()
            .limit(limit)
            .skip(skip)

        const totalPages = Math.ceil(allEntries / Number(limit))
        res.status(200).json({
            ok: true,
            allEntries,
            totalPages,
            data,
            currentPage: page,
            prevPage: page > 1 ? page - 1 : null,
            nextPage: page < totalPages ? page + 1 : null
        });
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
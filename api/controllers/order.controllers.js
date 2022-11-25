const { response, request } = require("express");
const Order = require("../models/Order");

const getOrders = async (req = request, res = response) => {
    try {
        const allOrders = await Order.find()
        res.status(200).json({ ok: true, data: allOrders })

    } catch (error) {
        res.status(500).json({ ok: false, message: error.message })
    }
}


const postOrder = async (req = request, res = response) => {
    const { products, payment, direction } = req.body
    if (!products || !payment || !direction) return res.status(400).json({ ok: false, message: "send a valid body" })
    try {
        const newOrder = await Order.create(req.body)
        res.status(201).json({ ok: true, newOrder })
    } catch (error) {
        res.status(500).json({ ok: false, message: error.message })
    }
}


module.exports = {
    getOrders,
    postOrder
}


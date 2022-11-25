const { Router } = require("express")
const { postOrder, getOrders } = require("../controllers/order.controllers")
const orderRouter = Router()


orderRouter.get("/",getOrders)
orderRouter.post("/", postOrder)


module.exports = orderRouter
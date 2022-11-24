const { Router } = require("express")
const { getProducts, postProduct } = require("../controllers/product.controllers")
const productRouter = Router()

productRouter.get("/", getProducts)
productRouter.post("/", postProduct)


module.exports = productRouter
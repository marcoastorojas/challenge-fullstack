const { Router } = require("express")
const { getProducts, postProduct } = require("../controllers/product.controllers")
const productRouter = Router()
const {param} =require("express-validator")


productRouter.get("/",[
    param("page").isNumeric().withMessage("must be a valid value"),
],getProducts)
productRouter.post("/", postProduct)


module.exports = productRouter
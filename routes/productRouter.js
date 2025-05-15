const express = require("express")
const {getAllProducts, addProduct} = require("../controllers/productController")
// const MiddlewareOne = require("../middlewares/middleware1")
// const MiddlewareTwo = require("../middlewares/middleware2")
const productRouter = express.Router()

productRouter.get("/", getAllProducts)
productRouter.post("/", addProduct)
module.exports = productRouter
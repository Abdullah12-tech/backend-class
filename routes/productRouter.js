const express = require("express")
const {getAllProducts, addProduct, getSingleProduct} = require("../controllers/productController")
// const MiddlewareOne = require("../middlewares/middleware1")
// const MiddlewareTwo = require("../middlewares/middleware2")
const productRouter = express.Router()

productRouter.get("/", getAllProducts)
productRouter.get("/:id", getSingleProduct)
productRouter.post("/", addProduct)
module.exports = productRouter
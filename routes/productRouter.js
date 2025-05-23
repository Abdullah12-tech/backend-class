const express = require("express")
const {getAllProducts, addProduct, getSingleProduct} = require("../controllers/productController")
const isLoggedIn = require("../middlewares/isLoggedIn")
const isVerified = require("../middlewares/isVerified")
const isSeller = require("../middlewares/isSeller")
// const MiddlewareOne = require("../middlewares/middleware1")
// const MiddlewareTwo = require("../middlewares/middleware2")
const productRouter = express.Router()

productRouter.get("/", getAllProducts)
productRouter.get("/:id", getSingleProduct)
productRouter.post("/",isLoggedIn,isSeller, addProduct)
module.exports = productRouter
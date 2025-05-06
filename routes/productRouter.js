const express = require("express")
const {getAllProducts} = require("../controllers/productController")
const MiddlewareOne = require("../middlewares/middleware1")
const MiddlewareTwo = require("../middlewares/middleware2")
const productRouter = express.Router()

productRouter.get("/",MiddlewareOne,MiddlewareTwo, getAllProducts)
module.exports = productRouter
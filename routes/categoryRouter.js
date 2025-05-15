const express = require("express")
const { addCategory } = require("../controllers/categoryController")
const categoryRouter = express.Router()

categoryRouter.post("/", addCategory)

module.exports = categoryRouter
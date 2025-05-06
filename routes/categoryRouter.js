const express = require("express")
const categoryRouter = express.Router()

categoryRouter.post("/", addCategory)

module.exports = categoryRouter
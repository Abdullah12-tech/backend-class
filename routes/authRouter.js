const express = require("express")
const { signUp, login, verifyEmail } = require("../controllers/authController")
const authRouter = express.Router()

authRouter.post("/signup", signUp)
authRouter.post("/login", login)
authRouter.post("/verify/:token", verifyEmail)
module.exports = authRouter
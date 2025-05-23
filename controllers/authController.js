const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const sendVerificationEmail = require("../services/nodemailer/sendMail");
const randomGenerate = require("../utils/randomGenerate");
const signUp = async (req, res) => {
    const { password, email, name } = req.body;
    try {
        const salt = await bcrypt.genSalt(10)
        const token = randomGenerate(8)
        const hashedPassword = await bcrypt.hash(password, salt)
        const verificationExp = Date.now() + 3000000
        const user = await userModel.create({ ...req.body, password: hashedPassword, verificationToken: token, verificationExp: verificationExp })
        if (!user) {
            return res.status(400).json({
                message: "User not successfully signed up",
                status: "error",
            })
        }
        const userFirstName = name.split(" ")[0]
        sendVerificationEmail(email, userFirstName, token)
        return res.status(201).json({
            status: "success",
            message: "signup successful",
            user
        })

    } catch (err) {
        console.log(err);
    }
}

const verifyEmail = async (req, res) => {
    const { token } = req.params;
    try {
        const user = await userModel.findOne({ verificationToken: token })
        if (!user) {
            return res.status(403).json({
                message: "The token is invalid or has been verified"
            })
        }
        if (user.verificationExp < Date.now()) {
            return res.status(403).json({
                message: "Token has expired"
            })
        }

        await userModel.findByIdAndUpdate(user._id, { 
            isVerified: true,
            verificationToken: null,
            verificationExp: null
         })
        return res.status(200).json({
            message: "Email has been verified",
            token
        })
    } catch (err) {
        console.log(err);
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(400).json({
                message: "Email or password incorrect",
                status: "error"
            })
        }
        const passwordCorrect = await bcrypt.compare(password, user.password)
        if (!passwordCorrect) {
            return res.status(400).json({
                message: "Invalid email or password",
                status: "error"
            })
        }

        const accessToken = jwt.sign({ email: user.email, id: user._id }, process.env.jwt_secret, {
            expiresIn: process.env.jwt_expires
        })

        return res.status(201).json({
            message: "Logged in successful",
            status: "success",
            accessToken,
            user
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    signUp,
    login,
    verifyEmail
}
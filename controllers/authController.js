const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const signUp = async (req,res) => {
    const { password } = req.body;
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const user = await userModel.create({...req.body, password: hashedPassword})
        if (!user) {
            return res.status(400).json({
                message: "User not successfully signed up",
                status: "error",
            })
        }
        res.status(201).json({
            status: "success",
            message: "signup successful",
            user
        })
    } catch (err) {
        console.log(err);
    }
}

const login = async (req,res)=>{
    const {email, password} = req.body;
    try {
        const user = await userModel.findOne({email})
        if (!user) {
           return res.status(400).json({
                message: "Email or password incorrect",
                status: "error"
            })
        }
        const passwordCorrect = await bcrypt.compare(password, user.password)
        if (!passwordCorrect) {
           return res.status(400).json({
                message:"Invalid email or password",
                status:"error"
            })
        }

        const accessToken = jwt.sign({email: user.email, id: user._id}, process.env.jwt_secret,{
            expiresIn: process.env.jwt_expires
        } )

        return res.status(201).json({
            message: "Logged in successful",
            status: "success",
            accessToken
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    signUp,
    login
}
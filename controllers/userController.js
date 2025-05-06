const categoryModel = require("../models/categoryModel")
const userModel = require("../models/userModel")

const getAllUsers = (req, res)=>{
    res.json("all users")
}

const getSingleUser = (req, res)=>{
    res.json("single user")
    console.log("user added");
    
}
const addUser = async (req,res) =>{
    try {
        const user = await userModel.create(req.body)
        if (!user) {
            return res.status(400).json({
                status: "error",
                message: "user not added"
            })
        }
        res.status(201).json({
            status: "success",
            message: "user has been added",
            user
        })
    } catch (err) {
        console.log(err);
    }
}

const deleteUser = (req, res)=>{
    res.json("deleted user")
}

module.exports = {
    getAllUsers,
    getSingleUser,
    deleteUser,
    addUser
}
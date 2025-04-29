const express = require("express")
const userRouter = express.Router()

userRouter.get("/", (req, res)=>{
    res.json({
        message: "These are all the users we have here"
    })
})
userRouter.post("/:id", (req, res)=>{
    console.log(req.params);
    
    res.json({
        message: "User with the id " + req.params.id + " has been added"
    })
})
userRouter.delete("/:id", (req, res)=>{
    console.log(req.params);
    
    res.json({
        message: "User with the id " + req.params.id + " has been deleted"
    })
})
userRouter.patch("/:id", (req, res)=>{
    console.log(req.params);
    
    res.json({
        message: "User with the id " + req.params.id + " has been updated"
    })
})

function isAbdullah() {
    console.log("I have modified something");
    console.log("What is going on there");
}

module.exports = userRouter
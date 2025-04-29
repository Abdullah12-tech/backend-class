const express = require("express")
const productRouter = express.Router()

productRouter.get("/", (req,res)=>{
    res.json({
        message: "These are all the products we have here"
    })
})
productRouter.post("/:id",(req,res)=>{
    res.json({

        message: "The product with the id " + req.params.id + " has been added"
    })
})
productRouter.delete("/:id",(req,res)=>{
    res.json({

        message: "The product with the id " + req.params.id + " has been deleted"
    })
})
productRouter.patch("/:id",(req,res)=>{
    res.json({

        message: "The product with the id " + req.params.id + " has been updated"
    })
})
module.exports = productRouter
const productModel = require("../models/productModel")

const getAllProducts = async (req,res)=>{
    const products = await productModel.find()
    if (!products) {
        res.status(400).json({
            message: "products not found",
            status: "error"
        })
    }
    res.json({
        message:"products has been gotten",
        status: "success",
        products
    })
}
const addProduct = async (req,res)=>{
    const product = await productModel.create(req.body)
    if (!product) {
        res.status(400).json({
            message: "product not created",
            status: "error"
        })
    }
    res.json({
        message:"product has added",
        status: "success",
        product
    })
}
const getSingleProduct = async (req,res)=>{
    const {id} = req.params;
    const product = await productModel.findById(id)
    if(!product){
        return res.status(400).json({
            message: "product not found",
            status: "error"
        })
    }
    res.status(200).json({
        message: "product found",
        status:"success",
        product
    })
}

module.exports = {
    getAllProducts,
    addProduct,
    getSingleProduct
}
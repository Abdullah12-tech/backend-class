const getAllProducts =(req,res,next)=>{
    res.json({
        message:"These are all the products"
    })
}

module.exports = {getAllProducts}
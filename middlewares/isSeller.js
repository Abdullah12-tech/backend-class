const isSeller = async (req,res,next)=>{
    const user = req.user;
    if (user.role !== "seller") {
        res.status(403).json({
            message: "You must be a seller before adding product",
            status: "error"
        })
    }
    next()
}
module.exports = isSeller
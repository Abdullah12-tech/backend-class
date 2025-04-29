const express = require("express")
const app = express()
const userRouter = require("./routes/userRouter")
const productRouter = require("./routes/productRouter")
app.use(express.json())
const port = 3000
app.listen(port,()=>{
    console.log("Listening on port " + port);
})

app.use("/api/users", userRouter)
app.use("/api/products", productRouter)

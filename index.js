const express = require("express")
const app = express()
const cors = require("cors")
const userRouter = require("./routes/userRouter")
const productRouter = require("./routes/productRouter")
const categoryRouter = require("./routes/categoryRouter")
const blogRouter = require("./routes/blogRouter")
const connectToDb = require("./config/connectToDb")
app.use(express.json())
app.use(cors())
const port = 3000
app.listen(port,()=>{
    console.log("Listening on port " + port);
})
connectToDb()

app.use("/api/users", userRouter)
app.use("/api/products", productRouter)
app.use("/api/category", categoryRouter)
app.use("/api/blogs", blogRouter)


// const zoologist = ()=> {
//     console.log('abdul is my guy')
// }

//MIDDLEWARE

//1. intercept requests before they reach route handlers
//2. have access to the request and response objects
//3. can execute code
//4. 

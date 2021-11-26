const express = require("express")
const app = express()
const helmet = require("helmet")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const morgan = require("morgan")
const userRoute = require('./routes/users')
const authRoute = require("./routes/auth")



dotenv.config()
mongoose.connect(process.env.MONGOOSE_URL,{useNewUrlParser:true},()=>{
    console.log("Connented to database")
})

app.use(express.json())
app.use(helmet())
app.use(morgan("common"))


app.use('/api/users',userRoute)
app.use('/api/auth',authRoute)

// app.get("/",(req,res)=>{
//     res.send("Home Page")
// })

app.listen(5000,()=>{
    console.log("Server is running....")
})
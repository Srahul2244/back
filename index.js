const express= require("express")
const app =express()
const {connection} =require('./config/db')
const cors =require('cors')

const {chartRouter}=require("./routes/chart.route")
require('dotenv').config()
app.use(express.json())
app.use(cors())

app.use("/chart",chartRouter)

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log(`port runing mine at ${process.env.port}`)
        console.log("connected to db") 
    }catch(err){
        console.log(err)
        console.log("trouble in connected to db")
    }
  
})
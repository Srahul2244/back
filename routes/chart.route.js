const express= require('express')
const chartRouter =express.Router()
const {chartModel} =require("../Models/chart.model")


chartRouter.get("/",async(req,res)=>{
    try{
        const data=await chartModel.find()
        // console.log(data)
        res.send(data)
    }catch(err){
        res.send("something went wrong")
    }
})

module.exports={chartRouter}
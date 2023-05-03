

const mongoose =require("mongoose")

const chartSchema =mongoose.Schema({
    end_year: { type: String },
    intensity: { type: Number},
    sector: { type: String},
    topic: { type:String},
    insight: { type: String },
    url: { type: String },
    region: { type: String },
    start_year:{type:String},
    imapct:{type:String},
    added:{type:String},
    published:{type:String},
    relevance:{type:Number},
    pestle:{type:String},
    source:{type:String},
    title:{type:String},
    likelihood:{type:Number}    
})

const chartModel =mongoose.model('assig',chartSchema)

module.exports ={chartModel}

const mongoose = require("mongoose")
const hatsSchema = mongoose.Schema({
    hat_name: {
        type:String,
        required:[true,"Hat Brand is required"]
    },
    hat_color: {
        type:String,
        required:[true,"Hat Color is required"]
    },
    hat_cost: {
        type:Number,
        required:[true,"Hat Cost is required"]
    }
 
})
module.exports = mongoose.model("Hats",hatsSchema)
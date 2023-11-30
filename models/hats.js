const mongoose = require("mongoose")
const hatsSchema = mongoose.Schema({
    hat_name: {
        type:String,
        required:[true,"Hat Brand is required"],
        minlength: "2",
        maxlength: "10"
    },
    hat_color: {
        type:String,
        required:[true,"Hat Color is required"]
    },
    hat_cost: {
        type:Number,
        required:[true,"Hat Cost is required"],
        min: 0,
        max: 10000
    }
 
})
module.exports = mongoose.model("Hats",hatsSchema)
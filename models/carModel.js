const mongoose = require("mongoose")

const carScheme = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Car Name"],
    },
    model: {
        type: String,
        required: [true, "Please Enter Car Model"]
    },
    engineType: {
        type: String,
        required: [true, "Please Enter Engine Type"]
    },
    fuelType: {
        type: String,
        required: [true, "Please Enter Fuel Type"]
    },
    mileage: {
        type: String,
    },
    price: {
        type: String, 
        required: [true, "Please Enter a price"]
    },
    imageURL: {
        type: String,
        required: [true, "Please Enter at least one Image"]
    },
    description: {
        type: String, 
        required: [true, "Please Enter a description"]
    }
})

module.exports = mongoose.model('Car', carScheme)
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
    images: {
        type: Array,
        required: [true, "Please Enter at least one Image"]
    }
})

const Car = mongoose.model('Car', carScheme)

export default Car;
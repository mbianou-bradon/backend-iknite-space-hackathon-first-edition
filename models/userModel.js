const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter your name"],
    },
    email: {
        type: String,
        required: [true, "Please Enter your Email Address"],
        unique: [true, "Email address already exist, enter a different email address"],
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "Please enter a Password"],
        minlength: 8,
        select: false,
    },
    confirmPassword: {
        type: String,
        required: [true, "Please confirm your password"],
        validate: {
            validator: function(e){
                return e = this.password;
            },
            message: "Password and Confirm Password do not Match!"
        }
    },
    contact: {
        type: String,
        required: [true, "Enter your phone number"],
        unique: [true, "Phone number is already exist, please enter a different number"]
    },
    location: {
        type: String, 
        required: [true, "Please Enter your Location"]
    },
    importLicenseNumber: {
        type: String,
    },
    role: {
        type: String,
        default: "user",
        enum: ['user', 'seller', 'admin']
    }
})

module.exports = mongoose.model('User', userSchema)
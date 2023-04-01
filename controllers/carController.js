const Car = require('../models/carModel')
const mongoose = require('mongoose') 

// get all cars
const getCars = async (req, res) => {
    const cars = await Car.find({}).sort({createdAt: -1})

    res.status(200).json(cars)
}


// get a single car
const getCar = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such car"})
    }

    const car = await Car.findById(id)

    if(!car) {
        return res.status(404).json({error: "No such car."})
    }

    res.status(200).json(car)
}



// create a new car
const createCar = async (req, res) => {
    const {name, model, engineType, fuelType, mileage, price, images} = req.body

    // add doc to db
    try{
        const car = await Car.create({name, model, engineType, fuelType, mileage, price, images})
        res.status(200).json(car)
    } catch (error) {
        res.status(400).json({error: error.message})
    }  
}


// delete a car
const deleteCar = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such car"})
    }

    const car = await Car.findOneAndDelete({_id: id})

    if(!car) {
        return res.status(400).json({error: "No such car."})
    }
    res.status(200).json(car)
}


// update a car
const updateCar = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such car"})
    }

    const car = await Car.findOneAndUpdate({_id: id}, {
        ...req.body

    })

    if(!car) {
        return res.status(400).json({error: "No such car."})
    }

    res.status(200).json(car)
}



module.exports = {
    createCar,
    getCars,
    getCar,
    deleteCar,
    updateCar

}
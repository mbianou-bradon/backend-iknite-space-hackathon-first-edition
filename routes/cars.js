const express = require('express')
const { createCar, getCars, getCar, deleteCar, updateCar } = require('../controllers/carController')


const router = express.Router()
// GET all cars
router.get('/', getCars)

// GET a single car
router.get('/:id', getCar)

// POST a single car
router.post('/', createCar)

// DELETE a car
router.delete('/:id', deleteCar)

// UPDATE a car
router.patch('/:id', updateCar)

module.exports = router
const express = require('express')

const router = express.Router()
// GET all cars
router.get('/', (req, res) => {
    res.json({msg: "get all cars"})
})

// GET a single car
router.get('/:id', (req, res) => {
    res.json({msg: 'get a single car'})
})

// POST a single car
router.post('/', (req, res) => {
    res.json({msg: 'post a new car'})
})

// DELETE a car
router.delete('/:id', (req, res) => {
    res.json({msg: 'delete a new car'})
})

// UPDATE a car
router.patch('/:id', (req, res) => {
    res.json({msg: 'update a new car'})
})

module.exports = router
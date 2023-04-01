const express = require('express')
const { createUser, getUsers, getUser, deleteUser, updateUser } = require('../controllers/userController')


const router = express.Router()
// GET all users
router.get('/', getUsers)

// GET a single user
router.get('/:id', getUser)

// POST a single user
router.post('/', createUser)

// DELETE a user
router.delete('/:id', deleteUser)

// UPDATE a user
router.patch('/:id', updateUser)

module.exports = router
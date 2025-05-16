const express = require('express')
const { registerUser, login, editUser, deleteUser,getAllUsers } = require('../controllers/authControl')
const router = express.Router()

router.post('/register', registerUser)
router.post('/login', login)
router.get('/users', getAllUsers);
router.put('/users/:id', editUser)
router.delete('/users/:id', deleteUser)

module.exports = router

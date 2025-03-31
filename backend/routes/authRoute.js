const express = require('express')
const {registerUser,login} = require('../controllers/authControl')
const router = express.Router()

router.post('/register',registerUser)
router.post('/login',login)

module.exports = router;
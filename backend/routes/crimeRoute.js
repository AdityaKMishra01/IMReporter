const express = require('express')
const {registerCrime} = require('../controllers/crime')
const router = express.Router()

router.post('/registercrime',registerCrime)

module.exports = router;
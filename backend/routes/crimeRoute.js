const express = require('express')
const {registerCrime,upload} = require('../controllers/crime')
const router = express.Router()

router.post('/registercrime', upload.array('images', 10), registerCrime)

module.exports = router;
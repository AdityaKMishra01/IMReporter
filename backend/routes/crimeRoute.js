const express = require('express')
const {registerCrime,getAllCrimes,upload} = require('../controllers/crime')
const router = express.Router()

router.post('/registercrime', upload.array('images', 10), registerCrime)
router.get('/getallcrimes',getAllCrimes)

module.exports = router;
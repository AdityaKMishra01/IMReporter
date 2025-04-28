const express = require('express')
const cors = require('cors')
const connectDB = require('./config/DBconn')
const authRoutes = require('./routes/authRoute')
const crimeRoute = require('./routes/crimeRoute')
const app = express()


//MiddleWare
app.use(express.json())
app.use(cors())
connectDB()


app.use('/api/auth',authRoutes)
app.use('/api/crimes',crimeRoute)


app.listen(8000,()=>{
    console.log('port is running on 8000')
})
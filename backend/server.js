const express = require('express')
const cors = require('cors')
const connectDB = require('./config/DBconn')
const authRoutes = require('./routes/authRoute')
const crimeRoute = require('./routes/crimeRoute')
const app = express()


//MiddleWare
app.use(express.json())
app.use(cors({
  origin: 'http://192.168.29.170:5173',
  credentials: true
}));

connectDB()


app.use('/api/auth',authRoutes)
app.use('/api/crimes',crimeRoute)


app.listen(8000,'0.0.0.0',()=>{
    console.log('port is running on 8000')
})
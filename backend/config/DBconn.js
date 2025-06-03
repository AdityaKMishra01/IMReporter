const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const connectDB = ()=>{
    try {
        mongoose.connect(process.env.URL)
        console.log('Connected to DataBase')
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;
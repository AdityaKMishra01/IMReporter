const mongoose = require('mongoose')

const connectDB = ()=>{
    try {
        mongoose.connect('mongodb://localhost:27017/imreporter')
        console.log('Connected to DataBase')
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;
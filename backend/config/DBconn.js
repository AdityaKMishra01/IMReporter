const mongoose = require('mongoose')

const connectDB = ()=>{
    try {
        mongoose.connect('mongodb+srv://aditya1872:ookkmm0000@cluster0.ae9aoc9.mongodb.net/imreporter?retryWrites=true&w=majority&appName=Cluster0')
        console.log('Connected to DataBase')
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;
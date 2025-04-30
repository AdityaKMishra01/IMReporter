const mongoose = require('mongoose')

const crimeUpload = new mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    crimetitle:{
        type:String,
        required:true
    },
    crimecategory:{
        type:String,
        required:true
    },
    crimedesc:{
        type:String,
    },
    crimelocation:{
      type:String,
      required:true  
    },
    status:{
        type:String,
        default:'pending'
    },
    images:[{
        type:String
    }]
},
{
    timestamps:true
})

const crime = mongoose.model('crime',crimeUpload)

module.exports = crime;
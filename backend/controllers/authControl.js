const User = require('../models/user')

const registerUser = async(req,res)=>{

    try {
        const {firstname,lastname,email,phoneno,password,usertype,govidname,govidno,state,city,address} = req.body;

        const userExists = await User.findOne({govidno})
    
        if(userExists){
            return res.status(400).json({message:'User Already Exists'})
        } 

        const newUser = new User({firstname,lastname,email,phoneno,password,usertype,govidname,govidno,state,city,address})
        await newUser.save()
        res.status(201).json({message:'Account Created successfully'})
    } catch (error) {
        console.log(error)
    }

    
}

const login = async(req,res)=>{
    try {
       const {phoneno,password} = req.body; 

       const user = await User.findOne({phoneno})

       if(!user){
        res.status(401).json({status:'failed',message:'Invalid Credentials'})
       }

       if(user.password !== password){
        res.status(401).json({status:'failed',message:'Invalid Credentials'})
       }

       res.status(200).json({status:'Success',message:'Login Successfully'})
    } catch (error) {
        console.log(error)
    }
}

module.exports = {registerUser,login}
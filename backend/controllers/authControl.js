const bcrypt = require('bcrypt')
const User = require('../models/user')

const registerUser = async(req,res)=>{

    try {
        const {firstname,lastname,email,phoneno,password,usertype,govidname,govidno,state,city,address} = req.body;

        const userExists = await User.findOne({govidno})
    
        if(userExists){
            return res.status(400).json({message:'User Already Exists'})
        } 

        const saltRound = 12
        const hashPassword = await bcrypt.hash(password,saltRound)

        const newUser = new User({firstname,lastname,email,phoneno,password:hashPassword,usertype,govidname,govidno,state,city,address})
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

       const isMatch = await bcrypt.compare(password, user.password);

       if(!isMatch){
        res.status(401).json({status:'failed',message:'Invalid Credentials'})
       }

       res.status(200).json({status:'Success',message:'Login Successfully',userid:user._id})
    } catch (error) {
        console.log(error)
    }
}

module.exports = {registerUser,login}
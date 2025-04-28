const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv')
dotenv.config()

// Configuration
cloudinary.config({ 
    cloud_name:process.env.Cloud_Name, 
    api_key: process.env.API_Key, 
    api_secret: process.env.API_Secret
});

module.exports = cloudinary
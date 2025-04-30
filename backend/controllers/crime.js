const crime = require("../models/crimeUpload");
const multer = require('multer');
const cloudinary = require("../config/cloudnary");
const path = require("path");

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // unique name
  }
});
const upload = multer({ storage: storage });

const registerCrime = async (req, res) => {
  try {
    const {
      userid,
      crimetitle,
      crimecategory,
      crimedesc,
      crimelocation,
      status,
    } = req.body;

    if (!userid || !crimelocation || !crimecategory) {
      return res
        .status(401)
        .json({ status: "failed", message: "Enter required details!" });
    }

    if(userid.length !== 24){
      return res.status(400).json({message:"Invalid User ID"})
    }

    //   uploading image to cloudinary
    const ImagesURL = [];
    for (const image of req.files) {
      const result = await cloudinary.uploader.upload(image.path, {
        folder: "crime_posts",
        resource_type: "auto",
      });
      ImagesURL.push(result.secure_url);
    }

    const newCrime = new crime({
      userid,
      crimetitle,
      crimecategory,
      crimedesc,
      crimelocation,
      status,
      images: ImagesURL,
    });

    await newCrime.save()

    res.status(200).json({status:"Sucessfully Uploaded"})
  } catch (error) {
    console.log(error);
  }
};


module.exports = {registerCrime,upload}
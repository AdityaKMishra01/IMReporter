const crime = require("../models/crimeUpload");
const cloudinary = require("../config/cloudnary");

const registerCrime = async (req, res) => {
  try {
    const {
      userid,
      crimetitle,
      crimecategory,
      crimedesc,
      crimelocation,
      images,
    } = req.body;

    if (!userid || !crimelocation || !crimecatogrie) {
      return res
        .status(401)
        .json({ status: "failed", message: "Enter required details!" });
    }

    //   uploading image to cloudinary
    const ImagesURL = [];
    for (const image of images) {
      const result = await cloudinary.uploader.upload(image, {
        folder: "crime_posts",
      });
      ImagesURL.push(result.secure_url);
    }

    const newCrime = new crime({
      userid,
      crimetitle,
      crimecategory,
      crimedesc,
      crimelocation,
      images: ImagesURL,
    });

    await newCrime.save()

    res.status(200).json({status:"Sucessfully Uploaded"})
  } catch (error) {
    console.log(error);
  }
};


module.exports = {registerCrime}
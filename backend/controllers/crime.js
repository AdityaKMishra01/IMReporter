const User = require('../models/user');
const crime = require("../models/crimeUpload");
const nodemailer = require('nodemailer');
const multer = require('multer');
const cloudinary = require("../config/cloudnary");
const path = require("path");
const dotenv = require('dotenv');
dotenv.config();

// Multer setup
const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// Register a new crime
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
      return res.status(401).json({ status: "failed", message: "Enter required details!" });
    }

    if (userid.length !== 24) {
      return res.status(400).json({ message: "Invalid User ID" });
    }

    // Upload images to cloudinary
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

    await newCrime.save();

    const user = await User.findById(userid);
    if (!user || !user.email) {
      return res.status(400).json({ message: 'User email not found' });
    }

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.Email,
        pass: process.env.Password,
      },
    });

    const mailOptions = {
      from: '"Crime Portal" <your_email@gmail.com>',
      to: user.email,
      subject: 'Crime Report Registered',
      html: `
        <h3>Dear ${user.firstname || 'User'},</h3>
        <p>Your crime report has been successfully registered.</p>
        <p><strong>Case ID:</strong> ${newCrime._id}</p>
        <p><strong>Title:</strong> ${crimetitle}</p>
        <p>We will look into it and keep you updated.</p>
        <p>Regards,<br />Crime Reporting Team</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ status: "Successfully Uploaded" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong." });
  }
};

// Get all crimes
const getAllCrimes = async (req, res) => {
  try {
    const crimes = await crime.find().populate('userid', 'firstname');
    res.status(200).json(crimes);
  } catch (error) {
    console.error("Error fetching crimes:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ✅ Edit crime
const updateCrime = async (req, res) => {
  try {
    const crimeId = req.params.id;
    const updatedData = req.body;

    const updatedCrime = await crime.findByIdAndUpdate(crimeId, updatedData, { new: true });

    if (!updatedCrime) {
      return res.status(404).json({ message: "Crime not found" });
    }

    res.status(200).json({ message: "Crime updated successfully", data: updatedCrime });

  } catch (error) {
    console.error("Error updating crime:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ✅ Delete crime
const deleteCrime = async (req, res) => {
  try {
    const crimeId = req.params.id;

    const deletedCrime = await crime.findByIdAndDelete(crimeId);

    if (!deletedCrime) {
      return res.status(404).json({ message: "Crime not found" });
    }

    res.status(200).json({ message: "Crime deleted successfully" });

  } catch (error) {
    console.error("Error deleting crime:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  registerCrime,
  getAllCrimes,
  updateCrime,
  deleteCrime,
  upload
};

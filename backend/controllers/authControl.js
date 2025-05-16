const bcrypt = require('bcrypt')
const User = require('../models/user')

const registerUser = async (req, res) => {
  try {
    const { firstname, lastname, email, phoneno, password, usertype, govidname, govidno, state, city, address } = req.body

    const userExists = await User.findOne({ govidno })

    if (userExists) {
      return res.status(400).json({ message: 'User Already Exists' })
    }

    const saltRound = 12
    const hashPassword = await bcrypt.hash(password, saltRound)

    const newUser = new User({
      firstname,
      lastname,
      email,
      phoneno,
      password: hashPassword,
      usertype,
      govidname,
      govidno,
      state,
      city,
      address,
    })

    await newUser.save()
    res.status(201).json({ message: 'Account Created successfully' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Server error' })
  }
}

const login = async (req, res) => {
  try {
    const { phoneno, password } = req.body
    console.log(phoneno, password)

    const user = await User.findOne({ phoneno })

    if (!user) {
      return res.status(401).json({ status: 'failed', message: 'Invalid Credentials' })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(401).json({ status: 'failed', message: 'Invalid Credentials' })
    }

    res.status(200).json({
      status: 'Success',
      message: 'Login Successfully',
      userid: user._id,
      role: user.usertype,
      firstname: user.firstname,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ status: 'failed', message: 'Server error' })
  }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch users' });
    }
};


const editUser = async (req, res) => {
  try {
    const userId = req.params.id
    const updates = { ...req.body }

    // Hash password if it's being updated
    if (updates.password) {
      const saltRounds = 12
      updates.password = await bcrypt.hash(updates.password, saltRounds)
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true })

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' })
    }

    const userResponse = updatedUser.toObject()
    delete userResponse.password // Remove password from response

    res.status(200).json({ message: 'User updated successfully', user: userResponse })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Server error' })
  }
}

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id

    const deletedUser = await User.findByIdAndDelete(userId)

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' })
    }

    res.status(200).json({ message: 'User deleted successfully' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Server error' })
  }
}

module.exports = { registerUser, login, editUser, deleteUser, getAllUsers }

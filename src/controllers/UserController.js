
import User from '../models/Users_models.js';
import path from "path"



// Create a new user
export const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const filename = req.file ? req.file.path : null;
  try {
    const user = new User({filename, name, email, password });
    await user.save();
    res.status(201).json({ message: 'User created successfully', user });
  } catch (err) {
    res.status(500).json({ message: 'Error creating user', error: err });
  }
};

// Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users', error: err });
  }
};

// Update a user by ID
export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User updated successfully', user: updatedUser });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
};



// // controllers/userController.js
// import User from '../models/Users_models.js';

// // Create a new user
// export const createUser = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     const newUser = new User({ name, email, password });
//     await newUser.save();
    
    
//     res.status(201).json({ message: 'User created successfully', user: newUser });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error', error: err });
//   }
// };

// // Get all users
// export const getUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json({ users });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error', error: err });
//   }
// };

// // Get a single user by ID
// export const getUserById = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.status(200).json({ user });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error', error: err });
//   }
// };



// // Delete a user by ID
// export const deleteUser = async (req, res) => {
//   try {
//     const user = await User.findByIdAndDelete(req.params.id);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.status(200).json({ message: 'User deleted successfully' });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error', error: err });
//   }
// };

import mongoose from "mongoose";
import User from "../models/users.model.js";
import bcrypt from 'bcrypt';

export const registerUser = async (req, res) => {
    const user = req.body;
    if (!user.name || !user.email || !user.password) {
      return res.status(400).json({ success: false, msg: 'Please enter all fields' });
    }
  
    try {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
      const newUser = new User(user);
      await newUser.save();
      res.status(201).json({
        success: true,
        data: newUser,
        msg: 'User registered successfully',
      });
    } catch (error) {
      console.error('Error, user not registered', error.message);
      res.status(500).json({ success: false, msg: 'Server Error' });
    }
  };

  export const loginUser = async (req, res) => {
    const { name, password } = req.body;
  

    if (!name || !password) {
      return res.status(400).json({ success: false, msg: 'Please enter all fields' });
    }
  
    try {
      const user = await User.findOne({ name });
      if (!user) {
        return res.status(400).json({ success: false, msg: 'Username not found' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ success: false, msg: 'Invalid credentials' });
      }
      res.status(200).json({ success: true, msg: 'User logged in successfully' });
    } catch (error) {
      console.error('Error during login', error.message);
      res.status(500).json({ success: false, msg: 'Server Error' });
    }
  };
  
  export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findByIdAndDelete(id);
      if (!user) {
        return res.status(404).json({ success: false, msg: 'User not found' });
      }
               res.status(200).json({ success: true, msg: 'User deleted successfully' });
    } catch (error) {
      console.error('Error, user not deleted', error.message);
               res.status(500).json({ success: false, msg: 'Server Error' });
    }
  };
  
  export const updateUser = async (req, res) => {
    const { id } = req.params;
    const user = req.body;
  
    try {
      const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
      res.status(200).json({
        success: true,
        data: updatedUser,
        msg: 'User updated successfully',
      });
    } catch (error) {
      console.error('Error, user not updated', error.message);
      res.status(500).json({ success: false, msg: 'Server Error' });
    }
  };
  
  export const getUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json({
        success: true,
        data: users,
      });
    } catch (error) {
      console.error('Error, users not fetched', error.message);
      res.status(500).json({ success: false, msg: 'Server Error' });
    }
  };

  
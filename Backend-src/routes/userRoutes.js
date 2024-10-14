import express from "express";
import User from "../Models/users.model.js";

const router = express.Router();

// Function that handles getting all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    console.error("Error, users not found", error.message);
    res.status(404).json({ success: false, msg: "Users not found" });
  }
};

// Function that handles user registration
const registerUser = async (req, res) => {
  const user = req.body;
  if (!user.name || !user.email || !user.password) {
    return res
      .status(400)
      .json({ success: false, msg: "Please enter all fields" });
  }
  const newUser = new User(user);

  try {
    await newUser.save();
    res.status(201).json({
      success: true,
      data: newUser,
      msg: "User registered successfully",
    });
  } catch (error) {
    console.error("Error, user not registered", error.message);
    res.status(500).json({ success: false, msg: "Server Error" });
  }
};

// Function that handles deleting a user
const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ success: false, msg: "User not found" });
    }
    res.status(200).json({ success: true, msg: "User deleted successfully" });
  } catch (error) {
    console.error("User not found", error.message);
    res.status(404).json({ success: false, msg: "User not found" });
  }
};

// Function that handles updating a user
const updateUser = async (req, res) => {
  const { id } = req.params;
  const user = req.body;

  if (!user.password) {
    return res
      .status(400)
      .json({ success: false, msg: "Invalid Credentials" });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
    res.status(200).json({
      success: true,
      data: updatedUser,
      msg: "User updated successfully",
    });
  } catch (error) {
    console.error("Error, user not updated", error.message);
    res.status(500).json({ success: false, msg: "Server Error" });
  }
}



router.post("/api/users", registerUser);
router.delete("/api/users/:id", deleteUser);
router.get("/api/users", getUsers);
router.patch("/api/users/:id", updateUser);
export default router;

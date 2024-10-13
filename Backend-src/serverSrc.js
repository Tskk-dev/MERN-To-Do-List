import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import User from "./Models/users.model.js";

dotenv.config();
const app = express();
app.use(express.json()); // json middleware processing 

// backend post request to register a user 
app.post("/api/users", async (req, res) => {
  const user = req.body;


  if (!user.name || !user.email || !user.password) {
    return res.status(400).json({ success: false, msg: "Please enter all fields" });
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

});

// backend delete request to delete a user
app.delete ("/api/users/:id", async (req, res) => {
  const {id} = req.params;

  try {
    await User.findByIdAndDelete(id); 
    res.status(200).json({ success: true, msg: "User deleted successfully" });
  } catch (error) {} 
});

app.listen(6969, () => {
  connectDB();
  console.log("Server is started at http://localhost:6969");
});

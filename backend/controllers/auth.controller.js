import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../lib/utils.js";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!password || !name || !email) {
      return res.status(400).json({ message: "All feilds are required" });
    }

    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "Email already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      name,
      password: hashedPassword,
      isActive: true,
    });

    if (newUser) {
      //send token

      generateToken(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      });
    } else {
      res.status(400).json({ message: "invalid user data" });
    }
  } catch (error) {
    console.log("Error in signup controller", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    await generateToken(user._id, res);
    res.status(200).json({
      _id: user._id,
      email: user.email,
      name: user.name,
      isActive: user.isActive,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ message: "Internal server error." });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully." });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ message: "Internal server error." });
  }
};

export const checkAuth = (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    console.log("Error in checkout controller", error.message);
    res.status(500).json({ message: "Internal server error." });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.log("error in getting users", error.message);
    res.status(400).json({ message: "internal server error" });
  }
};

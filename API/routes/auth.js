const express = require('express');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, "crypt").toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res.status(401).json("Wrong User Name");
    }

    const hashedPassword = CryptoJS.AES.decrypt(user.password, "crypt");
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    const inputPassword = req.body.password;

    if (originalPassword !== inputPassword) {
      return res.status(401).json("Wrong Password");
    }

    const accessToken = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, "crypt", { expiresIn: "3d" });

    const { password, ...others } = user._doc;
    return res.status(200).json({ ...others, accessToken });
  } catch (err) {
    return res.status(500).json(err);
  }
});

// Change Password
router.post('/change-password', async (req, res) => {
  try {
    const { userId, oldPassword, newPassword } = req.body;
    console.log("Request received for user ID:", userId);
    const user = await User.findById(userId);
    if (!user) {
      console.log("User not found for ID:", userId);
      return res.status(404).json("User not found");
    }

    const decryptedOldPassword = CryptoJS.AES.decrypt(user.password, "crypt").toString(CryptoJS.enc.Utf8);
    if (decryptedOldPassword !== oldPassword) {
      console.log("Old password is incorrect for user ID:", userId);
      return res.status(401).json("Old password is incorrect");
    }

    user.password = CryptoJS.AES.encrypt(newPassword, "crypt").toString();
    await user.save();
    console.log("Password updated for user ID:", userId);
    res.status(200).json("Password has been updated");
  } catch (err) {
    console.error("Error changing password:", err);
    res.status(500).json(err);
  }
});

module.exports = router;

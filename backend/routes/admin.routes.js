const express = require("express");
const { AdminModel } = require("../model/admin.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const adminRoutes = express.Router();

// Admin Signup

adminRoutes.post("/signup", async (req, res) => {
  const { username, name, email, number, password } = req.body;

  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      const user = new AdminModel({
        username,
        name,
        number,
        email,
        password: hash,
      });
      await user.save();
      res.status(200).json({ msg: "New User Added Successful!!" });
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// User Login

adminRoutes.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await AdminModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          const token = jwt.sign({ userID: user._id }, process.env.secretKey, {
            expiresIn: "1d",
          });
          const refToken = jwt.sign(
            { userID: user._id },
            process.env.secretKey,
            {
              expiresIn: "2d",
            }
          );
          res.status(200).json({
            msg: "Login Successful",
            token: token,
            refToken: refToken,
          });
        } else {
          res.status(401).json({ err: "Invalid Credentials" });
        }
      });
    }
  } catch (error) {
    res.status(400).json({ err: error });
  }
});

module.exports = { adminRoutes };

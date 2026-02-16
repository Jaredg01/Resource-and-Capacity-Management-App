// Handle login
import { connectDB } from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const db = await connectDB();
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username and password required"
      });
    }

    const user = await db.collection("account").findOne({
      "account.username": username.trim()
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Invalid username or password"
      });
    }

    // Plain text comparison (matches your DB structure)
    if (password !== user.account.password) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password"
      });
    }

    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET is missing");
      return res.status(500).json({
        success: false,
        message: "Server configuration error"
      });
    }

    const token = jwt.sign(
      {
        emp_id: user.emp_id,
        username: user.account.username,
        acc_type_id: user.account.acc_type_id
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.json({
      success: true,
      token,
      user: {
        emp_id: user.emp_id,
        username: user.account.username,
        acc_type_id: user.account.acc_type_id,
        account_id: user.account.account_id
      }
    });

  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

// Handle forgot password
export const forgotPassword = async (req, res) => {
  try {
    const db = await connectDB();
    const { username } = req.body;

    if (!username) {
      return res.status(400).json({
        success: false,
        message: "Username missing"
      });
    }

    const user = await db.collection("account").findOne({
      "account.username": username.trim()
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Username not found"
      });
    }

    return res.json({
      success: true,
      message: "Reset instructions sent"
    });

  } catch (error) {
    console.error("Forgot password error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

// Handle reset password (placeholder)
export const resetPassword = async (req, res) => {
  return res.json({
    success: true,
    message: "Reset password endpoint not implemented yet"
  });
};
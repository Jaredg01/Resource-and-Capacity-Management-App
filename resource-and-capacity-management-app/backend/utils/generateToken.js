import jwt from "jsonwebtoken";

// Generate a signed JWT for a user (7‑day expiry)
export const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email }, // Minimal payload for security
    process.env.JWT_SECRET,              // Secret key from env
    { expiresIn: "7d" }                  // Token lifetime
  );
};
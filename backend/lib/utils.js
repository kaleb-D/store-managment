import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const generateToken = async (userId, res) => {
  const token = await jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  await res.cookie("jwt", token, {
    maxAge: 7 * 24 * 3600 * 1000,
    httpOnly: true, //need to google it
    sameSite: "strict", // here as well
    secure: process.env.NODE_ENV !== "development",
  });
  return token;
};

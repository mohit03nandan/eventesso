const jwt = require("jsonwebtoken");
require("dotenv").config();

const SECRET = process.env.SECRET_KEY; // make sure this matches your .env

const verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"] || req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ auth: false, message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded; 
    next(); 
  } catch (err) {
    return res.status(401).json({ auth: false, message: "Invalid token" });
  }
};

module.exports = verifyToken;

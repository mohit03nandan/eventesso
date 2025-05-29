const mongoose = require('mongoose');
require('dotenv').config();



const connection = async () => {
  try {
    await mongoose.connect(process.env.DBURL);
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ Error connecting to MongoDB:", err);
  }
};

module.exports = connection;

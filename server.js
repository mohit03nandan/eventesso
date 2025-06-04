const express = require('express');
const connection = require('./configuration/dbconnection');
const authRoutes = require("./routes/authRoutes");
const vendorInfo = require("./routes/VendorRoutes");
require('dotenv').config()

const app = express();
app.use(express.json());


const cors = require('cors');
app.use(cors());


connection();


app.use("/api/auth", authRoutes);
app.use("/api/vendor",vendorInfo)

const port = process.env.PORT || 7999;
app.listen(port, () => {
  console.log("App is listening on port", port);
});

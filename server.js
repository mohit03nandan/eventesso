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


// todo
// fetch the added information for that organization
// book day and time
// delete particular information 
// update information
// add new information
// fetch all information 
// fetch particular information
// delete all information


// user
// add user
// delete user
// update profile info
// fetch all orgranization under km radius
// click on the organization
// try to conversation with organizatio person
// make payment option
// finally the organization is booked for that day
// google map api setup for that organization
// 
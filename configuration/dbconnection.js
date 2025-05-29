const mongoose = require('mongoose')
require('dotenv').config()

const MONGODB_URI = process.env.DBURL
const PORT = process.env.PORT



const connection = () =>{
    mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
}

module.exports = connection;

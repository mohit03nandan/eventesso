const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    PhoneNumber:Number,
    role: { type: String, enum: ['user', 'vendor',], default: 'user' },
    createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('User',userSchema)


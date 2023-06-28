const mongoose = require('mongoose')

const studentSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        gender: { type: String, enum: ['Male', 'Female'], required: false },
        age: { type: Number, required: true },
        phonenumber: { type: String, match: /^\d{10}$/, required: true },
        email: { type: String, match: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, required: true }
    },
    {
        timestamps: true
    }
);

const student = mongoose.model('student',studentSchema);
module.exports = student;
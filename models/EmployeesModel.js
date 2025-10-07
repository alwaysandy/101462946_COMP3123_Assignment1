const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    date_of_joining: {
        type: Date,
        required: true
    },
    department: {
        type: Number,
        required: true
    },
}, { timestamps: true });


module.exports = mongoose.model('EmployeesModel', employeeSchema)
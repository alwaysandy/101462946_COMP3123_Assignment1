const employeeModel = require("../models/EmployeesModel");
const express = require('express');
const {body, validationResult} = require('express-validator');
const employeeRoutes = express.Router();

employeeRoutes.get('/employees', async (req, res) => {
    try {
        const employees = await employeeModel.find({});
        return res.send(employees);
    } catch (err) {
        return res.status(400).send({
            message: err.message
        });
    }
});

employeeRoutes.post('/employees', [
    body('first_name')
        .trim().notEmpty().withMessage('Must include first name'),
    body('last_name')
        .trim().notEmpty().withMessage('Must include last name'),
    body('email')
        .trim().notEmpty().withMessage('Must include email').bail()
        .isEmail().withMessage('Invalid email address'),
    body('position')
        .trim().notEmpty().withMessage('Must include position'),
    body('salary')
        .notEmpty().withMessage('Must include salary').bail()
        .isNumeric().withMessage('Salary must be a number').bail()
        .isInt({min: 0}).withMessage('Salary must be positive'),
    body('date_of_joining')
        .notEmpty().withMessage('Must include date of joining').bail()
        .isISO8601().toDate().withMessage('Date of joining must be a date'),
    body('department')
        .trim().notEmpty().withMessage('Must include department')
], async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).send({
            status: false,
            errors: result.array().map(error => error.msg)
        });
    }

    const employee = new employeeModel(req.body);
    try {
        const newEmployee = await employee.save();
        return res.status(201).send({
            message: "Employee created successfully",
            employee_id: newEmployee._id
        });
    } catch (err) {
        return res.status(500).send({
            status: false,
            message: err.message
        });
    }
});

employeeRoutes.get('/employees/:employeeId', (req, res) => {
    // TODO - Send employee by id
    return res.sendStatus(404);
});

employeeRoutes.put('/employees/:employeeId', (req, res) => {
    if(!req.body.content) {
        return res.status(400).send({
            message: "Employee update content can not be empty"
        });
    }
    // TODO - Allow updating employees
    return res.sendStatus(404);
});

employeeRoutes.delete('/employees', (req, res) => {
    // TODO - Delete employee
    return res.sendStatus(404);
});

module.exports = employeeRoutes;
const employeeModel = require("../models/EmployeesModel");
const express = require('express');
const employeeRoutes = express.Router();

employeeRoutes.get('employees', (req, res) => {
    // TODO - Send employees
    return res.sendStatus(404);
});

employeeRoutes.post('employees', (req, res) => {
    if(!req.body.content) {
        return res.status(400).send({
            message: "Employee creation content can not be empty"
        });
    }

    // TODO - Handle Employee Creation 
    return res.sendStatus(404);
});

employeeRoutes.get('employees/:employeeId', (req, res) => {
    // TODO - Send employee by id
    return res.sendStatus(404);
});

employeeRoutes.put('employees/:employeeId', (req, res) => {
    if(!req.body.content) {
        return res.status(400).send({
            message: "Employee update content can not be empty"
        });
    }
    // TODO - Allow updating employees
    return res.sendStatus(404);
});

employeeRoutes.delete('employees', (req, res) => {
    // TODO - Delete employee
    return res.sendStatus(404);
});

module.exports = employeeRoutes;
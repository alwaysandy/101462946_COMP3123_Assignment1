const userModel = require("../models/UsersModel");
const express = require('express');
const userRoutes = express.Router();

userRoutes.post('signup', (req, res) => {
    if(!req.body.content) {
        return res.status(400).send({
            message: "Request body can not be empty"
        });
    }

    return res.sendStatus(404);
    // TODO - Handle Signup
});

userRoutes.post('login', (req, res) => {
    if(!req.body.content) {
        return res.status(400).send({
            message: "Login request can not be empty"
        });
    }

    return res.sendStatus(404);
    // TODO - Handle Login
});

module.exports = userRoutes;
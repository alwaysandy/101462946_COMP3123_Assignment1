const express = require('express');
const mongoose = require('mongoose');
const employeeRouter = require('./routes/EmployeeRoutes');
const userRouter = require('./routes/UserRoutes');

// TODO set up mongo atlas url
const DB_URL = process.env.DB_URL || "";
const PORT = process.env.PORT || 8081;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/user', userRouter);
app.use('/api/v1/emp', employeeRouter);

// For testing only
app.get('/', (req, res) => {
    res.send("<h1>Server is running</h1>");
});

// Connect to the database
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the mongoDB Atlas database");
    app.listen(PORT, () => {
        console.log(`Server is now listening on port ${PORT}`);
    });
}).catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
});
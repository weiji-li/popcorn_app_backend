const express = require('express')
const app = express()

const tasksRoute = require("./api/routes/tasks")

app.use("/tasks", tasksRoute);

// Error Handling
app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        message: error.message,
    })
})


module.exports = app;
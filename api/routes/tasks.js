const express = require("express")
const route = express.Router();

route.get("/", (req, res, next) =>{
    res.status(200).json({
        message: 'Hello Tasks!'
    })
});

module.exports = route;
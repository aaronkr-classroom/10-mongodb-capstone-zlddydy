// controllers/errorController.js
"use strict";

// Listing 12.11 (p. 184)
const httpStatus = require("http-status-codes");

// Listing 11.2 (p. 168) - 선택
exports.logErrors = (error, req, res, next) => {
    console.error(error.stack);
    next(error);
};

exports.pageNotFoundError = (req, res) => {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    res.render("error");
};

exports.internalServerError = (error, req, res, next) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    console.log(`ERROR occurred: ${error.stack}`);
    res.status(errorCode);
    res.send(`${errorCode} | Sorry, our application is experiencing a problem!`);
};
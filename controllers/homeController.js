// controllers/homeController.js
"use strict";

exports.showHome = (req, res) => {
    res.render("index");
};

// Listing 12.5 (p. 178)
exports.showTransportation = (req, res) => {
    res.render("transportation");
};

exports.showSignUp = (req, res) => {
    res.render("contact");
};

exports.postedSignUpForm = (req, res) => {
    res.render("thanks");
};

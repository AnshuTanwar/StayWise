const express = require("express");
const router = express.Router(); 
const User = require("../models/user.js");
const listingController = require("../controllers/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

//signup route
router.get("/signup", listingController.renderSignup);

router.post("/signup", wrapAsync(listingController.signup));   

//login route
router.get("/login", listingController.renderLogin);

router.post("/login",
    saveRedirectUrl,
    passport.authenticate("local", { failureRedirect: '/login', failureFlash: true}),
    listingController.login
); 

router.get("/logout", listingController.logout);

module.exports = router; 
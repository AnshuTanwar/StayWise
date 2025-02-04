const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const listingController = require("../controllers/review.js");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js")

//reviews post route
router.post("/", isLoggedIn, validateReview, wrapAsync(listingController.createReview));

//delete review 
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(listingController.deleteReview));

module.exports = router;
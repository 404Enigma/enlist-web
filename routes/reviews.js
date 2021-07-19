const express = require("express");
const router = express.Router();

const { add_review, get_reviews } = require("../src/controller/reviews.controller");

router.get("/reviews", get_reviews);
router.post("/reviews", add_review);

module.exports = router;

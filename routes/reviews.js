const express = require("express");
const router = express.Router();

const { add_review } = require("../src/controller/reviews.controller");

router.get("/reviews", (req, res) => {
  res.render("pages/review");
});

router.post("/reviews", add_review);

module.exports = router;

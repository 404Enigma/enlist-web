const express = require("express");

var router = express.Router();

router.get("/", function (req, res) {
  res.render("pages/home");
});

router.get("/settings", function (req, res) {
  res.render("/templates/settings.html");
});

router.get("/reviews", function (req, res) {
  res.render("pages/review");
});
module.exports = router;

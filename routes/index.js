const express = require("express");

var router = express.Router();

const { checkCookie } = require("../src/middleware/auth_middleware");

router.get("/", checkCookie, (req, res) => {
  let options = {};

  if (!req.decodedClaims) {
    options.islogged = false;
    res.render("pages/home", { options });
  } else {
    console.log(req.decodedClaims);
    options.islogged = true;

    res.render("pages/home", { options });
  }
});

router.get("/settings", (req, res) => {
  res.render("/templates/settings.html");
});

router.get("/reviews", (req, res) => {
  res.render("pages/review");
});

module.exports = router;

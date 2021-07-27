const express = require("express");

var router = express.Router();

const { checkCookie } = require("../src/middleware/auth_middleware");
const { logout } = require("../src/controller/checkUID.controller");

router.get("/", checkCookie, (req, res) => {
  let options = {};

  if (!req.decodedClaims) {
    options.islogged = false;
    res.render("pages/home", { options });
  } else {
    res.redirect("/tasks");
  }
});

router.get("/logout", checkCookie, logout);

router.get("/settings", (req, res) => {
  res.render("pages/settings");
});

router.use(require("./tasks/services"));

module.exports = router;

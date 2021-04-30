const express = require("express");
var router = express.Router();

const auth = require("../../src/controller/auth");
const { checkCookie, savecookie } = require("../../src/middleware/auth_middleware");

router.get("/login", (req, res) => {
  res.render("pages/login");
});

router.get("/savecookie", (req, res) => {
  const Idtoken = req.query.idToken;
  console.log(Idtoken);
  savecookie(Idtoken, res);
});

module.exports = router;

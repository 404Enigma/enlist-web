const express = require("express");
var router = express.Router();

const auth = require("../../src/controller/auth");
const { checkUID } = require("../../src/controller/checkUID.controller");
const { checkCookie, savecookie } = require("../../src/middleware/auth_middleware");

router.get("/login", (req, res) => {
  if (req.query.loginas === "guest") {
    console.log("guest login");
    return res.render("pages/login", { guest: true });
  }

  res.render("pages/login");
});

router.get("/savecookie", (req, res) => {
  const Idtoken = req.query.idToken;
  console.log(Idtoken);
  savecookie(Idtoken, res);
});

router.post("/checkUID", checkUID);

module.exports = router;

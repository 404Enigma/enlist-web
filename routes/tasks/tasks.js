const express = require("express");

var router = express.Router();

const { checkCookie } = require("../../src/middleware/auth_middleware");

router.get("/", checkCookie, function (req, res) {
  res.render("pages/tasks");
  console.log("UID of Signed in User is " + req.decodedClaims.uid);
});

module.exports = router;

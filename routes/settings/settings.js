const express = require("express");

var router = express.Router();

router.get("/settings", function (req, res) {
  res.render("/templates/settings.html");
});

module.exports = router;

const express = require("express");

var router = express.Router();

router.get("/", function (req, res) {
  res.render("pages/tasks");
});

module.exports = router;
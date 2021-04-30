const express = require("express");

var router = express.Router();

const { checkCookie } = require("../../src/middleware/auth_middleware");

const { add_task, get_tasks } = require("../../src/model/tasks");

router.get("/", async (req, res) => {
  const tasks = await get_tasks();

  console.log(tasks);
  res.render("pages/tasks", { tasks });
  //console.log("UID of Signed in User is " + req.decodedClaims.uid);
});

router.post("/add", (req, res) => {
  console.log(req.body);
  //res.json("success");
  add_task(req.body, "personal");
});

module.exports = router;

const express = require("express");

var router = express.Router();

const { checkCookie } = require("../../src/middleware/auth_middleware");
const { add_nodes } = require("../../src/middleware/createNodes");

const { add_task, get_tasks } = require("../../src/model/tasks");

router.get("/", checkCookie, add_nodes, async (req, res) => {
  if (!req.decodedClaims) {
    res.redirect("/login");
  } else {
    console.log(req.decodedClaims);
    const tasks = await get_tasks(req.decodedClaims.uid);
    console.log(tasks);

    res.render("pages/tasks", { tasks });
    console.log("UID of Signed in User is " + req.decodedClaims.uid);
  }
});

router.post("/add", checkCookie, (req, res) => {
  if (!req.decodedClaims) {
    res.redirect("/login");
  } else {
    console.log(req.decodedClaims);
    const user = {
      name: req.decodedClaims.name,
      email: req.decodedClaims.email,
      uid: req.decodedClaims.uid,
      picture: req.decodedClaims.picture,
    };

    console.log(req.body);
    //res.json("success");
    add_task(user, req.body, "personal");
  }
});

module.exports = router;

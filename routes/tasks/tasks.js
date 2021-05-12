const express = require("express");

var router = express.Router();

const { checkCookie } = require("../../src/middleware/auth_middleware");
const { add_nodes } = require("../../src/middleware/createNodes");

const tasks = require("../../src/controller/task.controller");

const redirect = require("../../src/controller/route.controller");

router.get("/", redirect.to_class);
router.get("/:group", checkCookie, add_nodes, tasks.get_tasks);
router.post("/addTask/:group", checkCookie, add_nodes, tasks.add_task);
router.post("/updateTask/:group", checkCookie, add_nodes, tasks.update_Task);
router.post("/important/:group", checkCookie, add_nodes, tasks.important_Task);
router.get("/important/all", checkCookie, add_nodes, tasks.get_important_Tasks);

module.exports = router;

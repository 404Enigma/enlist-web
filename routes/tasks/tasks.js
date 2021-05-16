const express = require("express");

var router = express.Router();

const { checkCookie } = require("../../src/middleware/auth_middleware");
const { add_nodes } = require("../../src/middleware/createNodes");
const { add_badge } = require("../../src/middleware/badgeCount");

const tasks = require("../../src/controller/task.controller");
const redirect = require("../../src/controller/route.controller");

router.get("/", redirect.to_class); // GET class page
router.get("/:group", checkCookie, add_nodes, add_badge, tasks.get_tasks); //GET group page
router.post("/addTask/:group", checkCookie, add_nodes, tasks.add_task); //POST add task
router.post("/updateTask/:group", checkCookie, add_nodes, tasks.update_Task); //POST update task
router.post("/important/:group", checkCookie, add_nodes, tasks.important_Task); //POST important task
router.post("/unimportant/:group", checkCookie, add_nodes, tasks.unimportant_Task); //POST unimportant task
router.get("/important/all", checkCookie, add_nodes, tasks.get_important_Tasks); // GET important tasks
router.post("/completed/:group", checkCookie, add_nodes, tasks.completed_Task); //POST completed tasks
router.get("/completed/all", checkCookie, add_nodes, tasks.get_completed_Tasks); // GET completed tasks

module.exports = router;

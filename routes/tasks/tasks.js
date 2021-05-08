const express = require("express");

var router = express.Router();

const { checkCookie } = require("../../src/middleware/auth_middleware");
const { add_nodes } = require("../../src/middleware/createNodes");

const tasks = require("../../src/controller/task.controller");

router.get("/", checkCookie, add_nodes, tasks.get_tasks);
router.post("/add", checkCookie, tasks.add_task);

module.exports = router;

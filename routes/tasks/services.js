const express = require("express");

var router = express.Router();

const { checkCookie } = require("../../src/middleware/auth_middleware");
const { add_nodes } = require("../../src/middleware/createNodes");

const services = require("../../src/controller/service.controller");

router.delete("/tasks/trash/:group", checkCookie, add_nodes, services.trash_Task); // DELETE permanent delete a task
router.post("/tasks/delete/:group", checkCookie, add_nodes, services.deleteTask); // POST Delete a tasks

router.get("/tasks/trash/all", checkCookie, add_nodes, services.get_deleted_tasks); // GET all deleted tasks

module.exports = router;

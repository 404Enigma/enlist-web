const express = require("express");

var router = express.Router();

const { checkCookie } = require("../../src/middleware/auth_middleware");
const { add_nodes } = require("../../src/middleware/createNodes");

const services = require("../../src/controller/service.controller");

router.delete("/tasks/deleted/:group", checkCookie, add_nodes, services.deleteTask); // POST Delete tasks

module.exports = router;

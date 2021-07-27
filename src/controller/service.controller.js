const moment = require("moment");

const { trash_a_task, delete_a_task, get_all_deleted_tasks, trash_a_bin_task } = require("../model/services");

let today = moment().format("DD MMMM YYYY");
let tomorrow = moment().add(1, "days").format("DD MMMM YYYY");
let day_after_tomorrow = moment().add(2, "days").format("DD MMMM YYYY");

const trash_Task = async (req, res) => {
  if (!req.decodedClaims) {
    return res.redirect("/login");
  }

  let group;
  if (req.params.group == "personal") group = "Pvt";

  const user = {
    name: req.decodedClaims.name,
    email: req.decodedClaims.email,
    uid: req.decodedClaims.uid,
    picture: req.decodedClaims.picture,
  };

  // console.log("Trash Group :", req.params.group);

  try {
    await trash_a_task(user, req.body, req.params.group);

    res.json("success");
  } catch (error) {
    res.json("Failed to delete");
  }
};

const deleteTask = async (req, res) => {
  if (!req.decodedClaims) {
    return res.redirect("/login");
  }

  let group;
  if (req.params.group == "class") group = req._payload._class;
  if (req.params.group == "division") group = req._payload._division;
  if (req.params.group == "personal") group = "Pvt";

  const user = {
    name: req.decodedClaims.name,
    email: req.decodedClaims.email,
    uid: req.decodedClaims.uid,
    picture: req.decodedClaims.picture,
  };

  // console.log(req.body);
  // console.log("Trash sss Group :", group);

  try {
    await delete_a_task(user, req.body, group);

    res.json("success");
  } catch (error) {
    res.json("Failed to delete");
  }
};

const delete_task_bin = async (req, res) => {
  if (!req.decodedClaims) {
    return res.redirect("/login");
  }

  let group;
  // console.log(req._payload);

  if (req.params.group == "personal") group = "Pvt";

  const user = {
    name: req.decodedClaims.name,
    email: req.decodedClaims.email,
    uid: req.decodedClaims.uid,
    picture: req.decodedClaims.picture,
  };

  // console.log(req.body);
  // console.log("Group :", req.params.group);

  try {
    await trash_a_bin_task(user, req.body, req.params.group);

    res.json("success");
  } catch (error) {
    res.json("Failed to delete");
  }
};

const get_deleted_tasks = async (req, res) => {
  if (!req.decodedClaims) {
    return res.redirect("/login");
  }
  let group;
  const user = { name: req.decodedClaims.name, email: req.decodedClaims.email, picture: req.decodedClaims.picture };
  const metadata = req._payload;

  if (req.params.group == "class") {
    group = req._payload._class;
    metadata.standard = req.params.group;
  }
  if (req.params.group == "division") {
    group = req._payload._division;
    metadata.standard = req.params.group;
  }

  if (req.params.group == "personal") {
    group = "Pvt";
    metadata.standard = req.params.group;
  }

  const deletedTasks = await get_all_deleted_tasks(req.decodedClaims.uid);
  metadata.group = group;

  deletedTasks.map((group) => {
    for (const tasks in group) {
      Object.values(group[tasks]).forEach((task) => {
        task.deadline = moment.unix(task.deadline).format("DD MMMM YYYY");
        if (moment(task.deadline).isSameOrBefore(today, "day")) {
          task.today = true;
        } else if (moment(tomorrow).isSame(task.deadline)) {
          task.tomorrow = true;
        } else if (moment(day_after_tomorrow).isSame(task.deadline)) {
          task.day_after_tomorrow = true;
        } else {
          task.beyond = true;
        }
      });
    }
  });

  res.render("pages/services/bin", { user, deletedTasks, metadata });
};

module.exports = { trash_Task, deleteTask, get_deleted_tasks, delete_task_bin };

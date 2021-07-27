const {
  add_a_task,
  get_all_tasks,
  update_a_task,
  complete_a_task,
  mark_as_important,
  mark_as_unimportant,
  get_all_imp_tasks,
  mark_as_completed,
  get_all_completed_tasks,
  restore_a_Task,
  restore_a_bin_Task,
} = require("../model/tasks");
var moment = require("moment");

let last_15_days = moment().subtract(15, "days").format("DD MMMM YYYY");
let today = moment().format("DD MMMM YYYY");
let tomorrow = moment().add(1, "days").format("DD MMMM YYYY");
let day_after_tomorrow = moment().add(2, "days").format("DD MMMM YYYY");

const get_tasks = async (req, res) => {
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

  const tasks = await get_all_tasks(req.decodedClaims.uid, group);

  metadata.group = group;

  tasks.map((task) => {
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

  console.log("metadata:", metadata);
  console.log("tasks: ", tasks);

  res.render("pages/tasks", { user, tasks, metadata });
};

const add_task = (req, res) => {
  if (!req.decodedClaims) {
    return res.redirect("/login");
  }

  let group;
  //console.log(req._payload);
  if (req.params.group == "class") group = req._payload._class;
  if (req.params.group == "division") group = req._payload._division;
  if (req.params.group == "personal") group = "Pvt";

  const user = {
    name: req.decodedClaims.name,
    email: req.decodedClaims.email,
    uid: req.decodedClaims.uid,
    picture: req.decodedClaims.picture,
  };

  //console.log(req.body);

  add_a_task(user, req.body, group, req.body.categorie);
  return res.json("success");
};

const update_Task = (req, res) => {
  if (!req.decodedClaims) {
    return res.redirect("/login");
  }

  let group;
  console.log(req._payload);
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
  // console.log("Group :", group);

  update_a_task(user, req.body, group);
  return res.json("success");
};

const completed_Task = (req, res) => {
  if (!req.decodedClaims) {
    return res.redirect("/login");
  }

  let group;
  console.log(req._payload);
  if (req.params.group == "class") group = req._payload._class;
  if (req.params.group == "division") group = req._payload._division;
  if (req.params.group == "personal") group = "Pvt";

  const user = {
    name: req.decodedClaims.name,
    email: req.decodedClaims.email,
    uid: req.decodedClaims.uid,
    picture: req.decodedClaims.picture,
  };

  console.log(req.body);
  console.log("Group :", group);

  mark_as_completed(user, req.body, group);
  res.json("success");
};

const important_Task = (req, res) => {
  if (!req.decodedClaims) {
    return res.redirect("/login");
  }

  let group;

  // console.log(req.body);
  // console.log(req._payload);
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
  // console.log("Group :", group);

  mark_as_important(user, req.body, group);
  res.json("success");
};

const unimportant_Task = (req, res) => {
  if (!req.decodedClaims) {
    return res.redirect("/login");
  }

  let group;
  if (req.params.group == "personal") group = "Pvt";

  // // console.log(req.body);
  // // console.log(req._payload);
  // if (req.params.group == "class") group = req._payload._class;
  // if (req.params.group == "division") group = req._payload._division;
  // if (req.params.group == "personal") group = "Pvt";

  const user = {
    name: req.decodedClaims.name,
    email: req.decodedClaims.email,
    uid: req.decodedClaims.uid,
    picture: req.decodedClaims.picture,
  };

  console.log("Group :", group);

  mark_as_unimportant(user, req.body, req.params.group);
  res.json("success");
};

const get_important_Tasks = async (req, res) => {
  if (!req.decodedClaims) {
    return res.redirect("/login");
  }

  let group;
  console.log(req.decodedClaims);
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

  const impTasks = await get_all_imp_tasks(req.decodedClaims.uid);

  metadata.group = group;

  for (section in impTasks) {
    //console.log("impTasks: ", impTasks[section]);
    console.log("section: ", section);
    impTasks[section].map((task) => {
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

  //console.log(impTasks);

  res.render("pages/services/important", { user, impTasks, metadata });
};

const get_completed_Tasks = async (req, res) => {
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

  const completedTasks = await get_all_completed_tasks(req.decodedClaims.uid);

  metadata.group = group;

  completedTasks.map((group) => {
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

  res.render("pages/services/completed", { user, completedTasks, metadata });
};

const restore_tasks = async (req, res) => {
  if (!req.decodedClaims) {
    return res.redirect("/login");
  }

  let group;

  // console.log(req.body);
  // console.log(req._payload);
  group = req.params.group;

  const user = {
    name: req.decodedClaims.name,
    email: req.decodedClaims.email,
    uid: req.decodedClaims.uid,
    picture: req.decodedClaims.picture,
  };

  // console.log(req.body);
  // console.log("Group :", group);

  try {
    await restore_a_Task(user, req.body, group);
    res.json("success");
  } catch (error) {
    console.log(error);
  }
};

const restore_bin_tasks = async (req, res) => {
  if (!req.decodedClaims) {
    return res.redirect("/login");
  }

  let group;

  // console.log(req.body);
  // console.log(req._payload);
  group = req.params.group;

  const user = {
    name: req.decodedClaims.name,
    email: req.decodedClaims.email,
    uid: req.decodedClaims.uid,
    picture: req.decodedClaims.picture,
  };

  // console.log(req.body);
  // console.log("Group :", group);

  try {
    await restore_a_bin_Task(user, req.body, group);
    res.json("success");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { get_tasks, add_task, update_Task, completed_Task, important_Task, unimportant_Task, get_important_Tasks, get_completed_Tasks, restore_tasks, restore_bin_tasks };

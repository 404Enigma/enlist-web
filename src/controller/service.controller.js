const { trash_a_task, delete_a_task, get_all_deleted_tasks } = require("../model/services");

const trash_Task = async (req, res) => {
  if (!req.decodedClaims) {
    res.redirect("/login");
  } else {
    let group;
    console.log(req._payload);

    if (req.params.group == "personal") group = "Pvt";

    const user = {
      name: req.decodedClaims.name,
      email: req.decodedClaims.email,
      uid: req.decodedClaims.uid,
      picture: req.decodedClaims.picture,
    };

    console.log(req.body);
    console.log("Group :", req.params.group);
    //res.json("success");

    try {
      await trash_a_task(user, req.body, req.params.group);

      res.json("Success");
    } catch (error) {
      res.json("Failed to delete");
    }
  }
};

const deleteTask = async (req, res) => {
  if (!req.decodedClaims) {
    res.redirect("/login");
  } else {
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
    //res.json("success");

    try {
      await delete_a_task(user, req.body, group);

      res.json("Success");
    } catch (error) {
      res.json("Failed to delete");
    }
  }
};

const get_deleted_tasks = async (req, res) => {
  if (!req.decodedClaims) {
    res.redirect("/login");
  } else {
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

    const deletedTasks = await get_all_deleted_tasks(req.decodedClaims.uid);

    metadata.group = group;

    // tasks.map((task) => {
    //   task.date = moment.unix(task.date).format("DD MMMM YYYY");
    // });

    //console.log(impTasks);

    deletedTasks.map((group) => {
      for (const tasks in group) {
        Object.values(group[tasks]).forEach((task) => console.log(task.title));
      }
    });

    res.render("pages/services/bin", { user, deletedTasks, metadata });
  }
};

module.exports = { trash_Task, deleteTask, get_deleted_tasks };

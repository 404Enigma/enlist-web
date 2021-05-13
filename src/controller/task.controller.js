const { add_a_task, get_all_tasks, update_a_task, complete_a_task, mark_as_important, get_all_imp_tasks, mark_as_completed, get_all_completed_tasks } = require("../model/tasks");
var moment = require("moment");

const get_tasks = async (req, res) => {
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

    const tasks = await get_all_tasks(req.decodedClaims.uid, group);

    metadata.group = group;

    tasks.map((task) => {
      task.date = moment.unix(task.date).format("DD MMMM YYYY");
    });

    res.render("pages/tasks", { user, tasks, metadata });
    console.log("UID of Signed in User is " + req.decodedClaims.uid);
  }
};

const add_task = (req, res) => {
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
    //res.json("success");
    add_a_task(user, req.body, group, req.body.categorie);
  }
};

const update_Task = (req, res) => {
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
    update_a_task(user, req.body, group);
  }
};

const completed_Task = (req, res) => {
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
    mark_as_completed(user, req.body, group);
  }
};

const important_Task = (req, res) => {
  if (!req.decodedClaims) {
    res.redirect("/login");
  } else {
    let group;

    console.log(req.body);
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
    mark_as_important(user, req.body, group);
  }
};

const get_important_Tasks = async (req, res) => {
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

    const impTasks = await get_all_imp_tasks(req.decodedClaims.uid);

    metadata.group = group;

    // tasks.map((task) => {
    //   task.date = moment.unix(task.date).format("DD MMMM YYYY");
    // });

    //console.log(impTasks);

    impTasks.map((group) => {
      for (const tasks in group) {
        Object.values(group[tasks]).forEach((task) => console.log(task.title));
      }
    });

    res.render("pages/services/important", { user, impTasks, metadata });
  }
};

const get_completed_Tasks = async (req, res) => {
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

    const completedTasks = await get_all_completed_tasks(req.decodedClaims.uid);

    metadata.group = group;

    // tasks.map((task) => {
    //   task.date = moment.unix(task.date).format("DD MMMM YYYY");
    // });

    //console.log(completedTasks);

    completedTasks.map((group) => {
      for (const tasks in group) {
        Object.values(group[tasks]).forEach((task) => {
          task.date = task.date = moment.unix(task.date).format("DD MMMM YYYY");
        });
      }
    });

    res.render("pages/services/completed", { user, completedTasks, metadata });
  }
};

module.exports = { get_tasks, add_task, update_Task, completed_Task, important_Task, get_important_Tasks, get_completed_Tasks };

const { add_a_task, get_all_tasks } = require("../model/tasks");

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
    add_a_task(user, req.body, group, "shared");
  }
};

module.exports = { get_tasks, add_task };
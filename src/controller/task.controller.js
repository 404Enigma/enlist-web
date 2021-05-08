const { add_a_task, get_all_tasks } = require("../model/tasks");

const get_tasks = async (req, res) => {
  if (!req.decodedClaims) {
    res.redirect("/login");
  } else {
    console.log(req.decodedClaims);
    const tasks = await get_all_tasks(req.decodedClaims.uid);
    console.log(tasks);

    res.render("pages/tasks", { tasks });
    console.log("UID of Signed in User is " + req.decodedClaims.uid);
  }
};

const add_task = (req, res) => {
  if (!req.decodedClaims) {
    res.redirect("/login");
  } else {
    console.log(req.decodedClaims);
    const user = {
      name: req.decodedClaims.name,
      email: req.decodedClaims.email,
      uid: req.decodedClaims.uid,
      picture: req.decodedClaims.picture,
    };

    console.log(req.body);
    //res.json("success");
    add_a_task(user, req.body, "personal");
  }
};

module.exports = { get_tasks, add_task };

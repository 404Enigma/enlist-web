const admin = require("../../src/db/db");
var moment = require("moment");
moment().format();

const db = admin.database();
const taskRef = db.ref("To-Do-List");

const add_task = (task, categorie) => {
  task["date"] = moment(task.date).format("X");
  const random = Math.floor(Math.random() * 100000000 + 1);

  if (categorie === "personal") {
    taskRef.child(random).set({
      title: task.title,
      date: task.date,
      description: task.description,
    });
  } else {
  }
};

const get_tasks = async () => {
  let tasks = {};
  await taskRef.once("value", (snapshot) => {
    tasks = snapshot.val();
  });
  return tasks;
};

module.exports = { add_task, get_tasks };

const admin = require("../../src/db/db");
var moment = require("moment");
moment().format();

const db = admin.database();
const taskRef = db.ref("To-Do-List");

const add_a_task = (user, task, categorie) => {
  task["date"] = moment(task.date).format("X");
  const random = Math.floor(Math.random() * 100000000 + 1);

  if (categorie === "personal") {
    taskRef.child(user.uid + "/" + random).set({
      title: task.title,
      date: task.date,
      description: task.description,
    });
  } else {
  }
};

const get_all_tasks = async (uid) => {
  let tasks = {};
  await taskRef.child(uid).once("value", (snapshot) => {
    tasks = snapshot.val();
  });

  if (tasks == null) {
    tasks = {};
  }

  console.log("tasksss:  ", tasks);
  return tasks;
};

module.exports = { add_a_task, get_all_tasks };

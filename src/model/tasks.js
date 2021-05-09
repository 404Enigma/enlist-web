const admin = require("../../src/db/db");
var moment = require("moment");
moment().format();

const db = admin.database();
const taskRef = db.ref("To-Do-List");

const add_a_task = (user, task, group, categorie) => {
  task["date"] = moment(task.date).format("X");
  const uniqkey = "-" + Math.floor(1000000000 + Math.random() * 9000000000);

  const task_Data = {
    title: task.title,
    date: task.date,
    description: task.description,
    key: uniqkey,
    created_at: moment().unix(),
  };

  if (categorie === "private") {
    let personal_tasks = {};
    personal_tasks["/To-Do-List/" + user.uid + "/" + group + "/" + "Task" + uniqkey] = task_Data;
    db.ref().update(personal_tasks);
  } else {
    var urlRef = db.ref().child("Source/" + group);

    urlRef.once("value", function (snapshot) {
      snapshot.forEach(function (child) {
        let allchild = child.key;
        keySplittedArray = allchild.split(" ");

        for (let i = 0; i < keySplittedArray.length; i++) {
          let shared_task = {};
          shared_task["/To-Do-List/" + keySplittedArray[i] + "/" + group + "/" + "Task" + uniqkey] = task_Data;

          db.ref().update(shared_task);
        }
      });
    });

    let all_shared_tasks = {};
    all_shared_tasks["All-Tasks" + "/" + group + "/" + "Task" + uniqkey] = task_Data;
    db.ref().update(all_shared_tasks);
  }
};

const update_a_task = (user, task, group) => {
  const task_Data = {
    title: task.title,
    date: task.date,
    description: task.description,
    key: uniqkey,
    created_at: moment().unix(),
  };

  var update_a_task = {};
  update_a_task["/To-Do-List/" + user.uid + "/" + group + "/" + "Task" + uniqkey] = task_Data;
  db.ref().update(update_a_task);
};

const get_all_tasks = async (uid, group) => {
  let tasks = [];

  await db.ref("To-Do-List/" + uid + "/" + group).once("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var childKey = childSnapshot.uniqkey;
      var childData = childSnapshot.val();
      //console.log(childData);

      tasks.push(childData);
    });
  });

  console.log("tasksss:  ", tasks);
  return tasks;
};

module.exports = { add_a_task, get_all_tasks, update_a_task };

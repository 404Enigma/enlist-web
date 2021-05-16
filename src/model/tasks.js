const admin = require("../../src/db/db");
var moment = require("moment");
moment().format();

const { moveFbRecord, copyFbRecord } = require("../utils/moveNode");

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
  const updated_date = moment(task.date).format("X");
  const task_Data = {
    title: task.title,
    date: updated_date,
    description: task.description,
    key: task.key,
    created_at: moment().unix(),
  };

  var update_a_task = {};
  update_a_task["/To-Do-List/" + user.uid + "/" + group + "/" + "Task" + task.key] = task_Data;
  db.ref().update(update_a_task);
};

const mark_as_important = async (user, task, group) => {
  const uniquekey = task.key;

  console.log(uniquekey);
  const task_ref = db.ref("To-Do-List/" + user.uid + "/" + group + "/Task" + uniquekey);
  const new_task_ref = db.ref("To-Do-List/" + user.uid + "/" + "IMP" + "/" + group + "/Task" + uniquekey);

  await copyFbRecord(task_ref, new_task_ref);
};

const mark_as_unimportant = async (user, task, group) => {
  const uniquekey = task.key;

  console.log(uniquekey);
  const task_ref = db.ref("To-Do-List/" + user.uid + "/" + "IMP" + "/" + group + "/Task" + uniquekey);
  const new_task_ref = db.ref("To-Do-List/" + user.uid + "/" + group + "/Task" + uniquekey);

  await moveFbRecord(task_ref, new_task_ref);
};

const mark_as_completed = async (user, task, group) => {
  const uniquekey = task.key;

  console.log(uniquekey);
  const task_ref = db.ref("To-Do-List/" + user.uid + "/" + group + "/Task" + uniquekey);
  const new_task_ref = db.ref("To-Do-List/" + user.uid + "/" + "Completed" + "/" + group + "/Task" + uniquekey);

  await moveFbRecord(task_ref, new_task_ref);
};

const get_all_imp_tasks = async (uid) => {
  let group_task = [];

  await db.ref("To-Do-List/" + uid + "/" + "IMP").once("value", function (snapshot) {
    console.log("Snapshot: ", snapshot);

    snapshot.forEach(function (childSnapshot) {
      let obj = {};
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      //console.log(childData);
      obj[childKey] = childData;
      group_task.push(obj);
      // console.log("Key: ", childKey);
      // console.log("Data: ", childData);
    });
  });

  return group_task;
};

const get_all_completed_tasks = async (uid) => {
  let group_task = [];

  await db.ref("To-Do-List/" + uid + "/" + "Completed").once("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      let obj = {};
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      //console.log(childData);
      obj[childKey] = childData;
      group_task.push(obj);
    });
  });

  return group_task;
};

const complete_a_task = (user, task, group) => {
  const key = task.key;
  const task_ref = db.ref("To-Do-List/" + user.uid + "/" + group + "/Task" + key);
  const new_task_ref = db.ref("To-Do-List/" + user.uid + "/" + "IMP" + "/Task" + key);

  moveFbRecord(task_ref, new_task_ref);
};

const restore_a_Task = (user, task, group) => {
  const key = task.data.key;
  console.log(task.data.key);
  const task_ref = db.ref("To-Do-List/" + user.uid + "/" + "Completed" + "/" + group + "/Task" + key);
  const new_task_ref = db.ref("To-Do-List/" + user.uid + "/" + group + "/Task" + key);

  moveFbRecord(task_ref, new_task_ref);
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

module.exports = { add_a_task, get_all_tasks, update_a_task, complete_a_task, mark_as_important, mark_as_unimportant, mark_as_completed, get_all_imp_tasks, get_all_completed_tasks, restore_a_Task };

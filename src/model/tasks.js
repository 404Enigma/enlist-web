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
    deadline: task.date,
    description: task.description,
    key: uniqkey,
    created: moment().unix(),
    status: false,
  };

  if (categorie === "private") {
    let personal_tasks = {};
    personal_tasks["/To-Do-List/" + user.uid + "/" + group + "/" + "Task" + uniqkey] = task_Data;
    db.ref().update(personal_tasks);
  } else {
    task_Data.shared = user.name;

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
    deadline: updated_date,
    description: task.description,
    key: task.key,
    created: task.created,
  };

  ref = db.ref("/To-Do-List/" + user.uid + "/" + group + "/" + "Task" + task.key);

  ref.update({
    title: task.title,
    deadline: updated_date,
    description: task.description,
  });

  // var update_a_task = {};
  // update_a_task["/To-Do-List/" + user.uid + "/" + group + "/" + "Task" + task.key] = task_Data;
  // db.ref().update(update_a_task);
};

const mark_as_important = async (user, task, group) => {
  const key = task.key;

  const task_ref = db.ref("To-Do-List/" + user.uid + "/" + group + "/Task" + key);

  task_ref.once("value", async function (snapshot) {
    if (snapshot.val().status == true) {
      task_ref.update({ status: false });
      const imp_task_ref = db.ref("To-Do-List/" + user.uid + "/" + "IMP" + "/" + group + "/Task" + key);
      await imp_task_ref.remove();
    } else {
      task_ref.update({ status: true });
      const new_task_ref = db.ref("To-Do-List/" + user.uid + "/" + "IMP" + "/" + group + "/Task" + key);

      await copyFbRecord(task_ref, new_task_ref);
    }
  });
};

const mark_as_unimportant = async (user, task, group) => {
  const key = task.key;

  const task_ref = db.ref("To-Do-List/" + user.uid + "/" + "IMP" + "/" + group + "/Task" + key);
  task_ref.update({ status: false });
  const new_task_ref = db.ref("To-Do-List/" + user.uid + "/" + group + "/Task" + key);

  await moveFbRecord(task_ref, new_task_ref);
};

const get_all_imp_tasks = async (uid) => {
  let group_task = [];

  await db
    .ref("To-Do-List/" + uid + "/" + "IMP")

    .once("value", function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        let obj = {};
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        //console.log(childData);
        // obj[childKey] = childData;
        for (const key of Object.keys(childData)) {
          childData[key].group = childKey;
        }

        group_task.push(childData);

        // console.log("Key: ", childKey);
        // console.log("Data: ", childData);
      });
    });

  console.log("Group_task = ", group_task);

  let obj = {};

  group_task.map((group) => {
    //console.log(typeof group);
    for (const task in group) {
      //console.log(task);
      let task_obj = group[task];
      group_val = task_obj["group"];

      if (group_val in obj) {
        obj[group_val].push(task_obj);
      } else {
        obj[group_val] = [task_obj];
      }
    }
  });

  for (const group in obj) {
    console.log(group);
    console.log(obj[group]);

    obj[group].sort((a, b) => {
      return a.deadline - b.deadline;
    });
  }

  console.log(obj);

  return obj;
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

const mark_as_completed = (user, task, group) => {
  const key = task.key;

  const task_ref = db.ref("To-Do-List/" + user.uid + "/" + group + "/Task" + key);
  const new_task_ref = db.ref("To-Do-List/" + user.uid + "/" + "Completed" + "/" + group + "/Task" + key);
  const imp_task_ref = db.ref("To-Do-List/" + user.uid + "/" + "IMP" + "/" + group + "/Task" + key);

  task_ref.update({
    completed: moment().unix(),
  });

  task_ref.once("value", async function (snapshot) {
    if (snapshot.val().status == true) {
      await imp_task_ref.remove();
    }
  });

  moveFbRecord(task_ref, new_task_ref);
};

const restore_a_Task = async (user, task, group) => {
  const key = task.data.key;
  console.log(task.data.key);
  const task_ref = db.ref("To-Do-List/" + user.uid + "/" + "Completed" + "/" + group + "/Task" + key);
  const new_task_ref = db.ref("To-Do-List/" + user.uid + "/" + group + "/Task" + key);
  const imp_task_ref = db.ref("To-Do-List/" + user.uid + "/" + "IMP" + "/" + group + "/Task" + key);

  task_ref.once("value", async function (snapshot) {
    if (snapshot.val().status == true) {
      await moveFbRecord(task_ref, imp_task_ref);
    }
  });

  await moveFbRecord(task_ref, new_task_ref);
};

const restore_a_bin_Task = async (user, task, group) => {
  const key = task.data.key;
  const status = task.data.status;

  const task_ref = db.ref("To-Do-List/" + user.uid + "/" + "Deleted" + "/" + group + "/Task" + key);
  const new_task_ref = db.ref("To-Do-List/" + user.uid + "/" + group + "/Task" + key);
  const imp_task_ref = db.ref("To-Do-List/" + user.uid + "/" + "IMP" + "/" + group + "/Task" + key);

  task_ref.once("value", async function (snapshot) {
    if (snapshot.val().status == true) {
      await moveFbRecord(task_ref, imp_task_ref);
    }
  });
  await moveFbRecord(task_ref, new_task_ref);
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

  console.log(tasks);
  tasks.sort(function (x, y) {
    return x.deadline - y.deadline;
  });

  console.log("tasksss:  ", tasks);
  return tasks;
};

module.exports = {
  add_a_task,
  get_all_tasks,
  update_a_task,

  mark_as_important,
  mark_as_unimportant,
  mark_as_completed,
  get_all_imp_tasks,
  get_all_completed_tasks,
  restore_a_Task,
  restore_a_bin_Task,
};

const admin = require("../../src/db/db");
const db = admin.database();

const { moveFbRecord } = require("../utils/moveNode");

const taskRef = db.ref("To-Do-List");

const trash_a_task = async (user, task, group) => {
  const uniquekey = task.key;

  console.log(uniquekey);

  const completed_to_delete = db.ref("To-Do-List/" + user.uid + "/" + "Completed" + "/" + group + "/Task" + uniquekey);
  await completed_to_delete.remove();
};

const trash_a_bin_task = async (user, task, group) => {
  const uniquekey = task.key;

  console.log(uniquekey);

  const completed_to_delete = db.ref("To-Do-List/" + user.uid + "/" + "Deleted" + "/" + group + "/Task" + uniquekey);
  await completed_to_delete.remove();
};

const delete_a_task = async (user, task, group) => {
  const uniquekey = task.key;

  console.log(uniquekey);
  const task_ref = db.ref("To-Do-List/" + user.uid + "/" + group + "/Task" + uniquekey);
  const new_task_ref = db.ref("To-Do-List/" + user.uid + "/" + "Deleted" + "/" + group + "/Task" + uniquekey);

  await moveFbRecord(task_ref, new_task_ref);
};

const get_all_deleted_tasks = async (uid) => {
  let group_task = [];

  await db.ref("To-Do-List/" + uid + "/" + "Deleted").once("value", function (snapshot) {
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

module.exports = { trash_a_task, delete_a_task, get_all_deleted_tasks, trash_a_bin_task };

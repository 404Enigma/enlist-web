const admin = require("../../src/db/db");
const db = admin.database();

const { moveFbRecord } = require("../utils/moveNode");

const taskRef = db.ref("To-Do-List");

const delete_a_task = async (user, task, group) => {
  const uniquekey = task.key;

  console.log(uniquekey);

  const completed_to_delete = db.ref("To-Do-List/" + user.uid + "/" + "Completed" + "/" + group + "/Task" + uniquekey);
  await completed_to_delete.remove();
};

module.exports = { delete_a_task };

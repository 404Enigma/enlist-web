const admin = require("../../src/db/db");
const db = admin.database();

const get_PRN = async (uid) => {
  let PRN;
  await db.ref(`/PRN-Source/${uid}`).once("value", (snapshot) => {
    if (snapshot.exists()) {
      PRN = snapshot.val();
    }
  });

  return PRN;
};

const check_uid = async (uid) => {
  let status;
  const ref = db.ref(`/PRN-Source`);
  await ref.once("value", (snapshot) => {
    if (snapshot.exists()) {
      if (snapshot.child(uid).exists()) {
        console.log("exists!");
        status = true;
      } else {
        status = false;
      }
    } else {
      status = false;
    }
  });

  return status;
};

module.exports = { get_PRN, check_uid };

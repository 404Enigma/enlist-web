const admin = require("../db/db");
const db = admin.database();

const { get_metadata } = require("../utils/methods");

const { check_uid } = require("../../src/model/nodes");
const { cache_middleware } = require("../middleware/routecache");
const { copyFbRecord } = require("../utils/moveNode");

const nodeCreate_source = async (uid, _class, _division, PRN) => {
  let source_class = {};
  source_class["/Source/" + _class + "/" + uid] = "";
  await db.ref().update(source_class);

  let source_division = {};
  source_division["/Source/" + _division + "/" + uid] = "";
  await db.ref().update(source_division);
};

const all_tasks_update = async (uid, group) => {
  console.log("updateeeeeeeeeeeeee: ", group);
  const all_task_ref = db.ref("All-Tasks/" + group);
  const task_ref = db.ref("To-Do-List/" + uid + "/" + group);

  await copyFbRecord(all_task_ref, task_ref);
};

const add_nodes = async (req, res, next) => {
  let PRN, _class, _division;

  if (!req.decodedClaims) {
    res.redirect("/login");
  } else {
    const status = await check_uid(req.decodedClaims.uid); //check if To-do-list node exists

    console.log("Status: " + status);

    if (status == false) {
      //fetch PRN,class,division from database
      const metadata = await get_metadata(req.decodedClaims.email);
      PRN = metadata.PRN;
      _class = metadata._class;
      _division = metadata._division;
      _year = metadata._year;

      await nodeCreate_source(req.decodedClaims.uid, _class, _division, PRN);

      //update
      await all_tasks_update(req.decodedClaims.uid, _class);
      await all_tasks_update(req.decodedClaims.uid, _division);
    } else {
      const cache_data = await cache_middleware(req.decodedClaims.uid, req.decodedClaims.email);

      console.log("conffff: ", cache_data);

      PRN = cache_data.PRN;
      _class = cache_data._class;
      _division = cache_data._division;
      _year = cache_data._year;
    }

    const _payload = {
      PRN,
      _class,
      _division,
      _year,
    };

    req._payload = _payload;
    next();
  }
};

module.exports = { add_nodes };

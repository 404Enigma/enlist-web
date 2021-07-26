const admin = require("../db/db");
const db = admin.database();

const { get_metadata, check_member } = require("../utils/methods");

const { check_uid } = require("../../src/model/nodes");
const { cache_middleware, cache_guest } = require("../middleware/routecache");
const { copyFbRecord } = require("../utils/moveNode");

const nodeCreate_source = async (node_name, uid, _class, _division) => {
  let source_class = {};
  source_class[node_name + "/" + _class + "/" + uid] = "";
  await db.ref().update(source_class);

  let source_division = {};
  source_division[node_name + "/" + _division + "/" + uid] = "";
  await db.ref().update(source_division);
};

const all_tasks_update = async (uid, group) => {
  console.log("updateeeeeeeeeeeeee: ", group);
  const all_task_ref = db.ref("All-Tasks/" + group);
  const task_ref = db.ref("To-Do-List/" + uid + "/" + group);

  await copyFbRecord(all_task_ref, task_ref);
};

const add_nodes = async (req, res, next) => {
  let PRN, _class, _division, _branch;

  if (!req.decodedClaims) {
    return res.redirect("/login");
  }

  const status = await check_uid(req.decodedClaims.uid); //check if To-do-list node exists
  console.log("Status: " + status);

  if (status == false) {
    //Check if the user is guest or btech gmail
    if ((await check_member(req.decodedClaims.email)) == false) {
      //User is guest user
      _class = "Class";
      _division = "Division";
      _branch = "Branch";
      PRN = 1234567890;

      await nodeCreate_source("Visitor", req.decodedClaims.uid, _class, _division);
      const cache_guest_data = await cache_guest(req.decodedClaims.uid, _class, _division, _branch, PRN);
      //Store Guest data to cache

      console.log("cache_guest_data: ", cache_guest_data);

      req._payload = {
        _class,
        _division,
        _branch,
        PRN,
      };

      return next();
    }

    //fetch PRN,class,division from database
    const metadata = await get_metadata(req.decodedClaims.email);
    PRN = metadata.PRN;
    _class = metadata._class;
    _division = metadata._division;
    _year = metadata._year;
    _branch = metadata._branch;

    await nodeCreate_source("Source", req.decodedClaims.uid, _class, _division);

    //update
    await all_tasks_update(req.decodedClaims.uid, _class);
    await all_tasks_update(req.decodedClaims.uid, _division);
  } else {
    if ((await check_member(req.decodedClaims.email)) == false) {
      //User is guest user
      _class = "Class";
      _division = "Division";
      _branch = "Branch";
      PRN = 1234567890;

      const cache_guest_data = await cache_guest(req.decodedClaims.uid, _class, _division, _branch, PRN);
      //Store Guest data to cache

      console.log("cache_guest_data: ", cache_guest_data);

      req._payload = {
        _class,
        _division,
        _branch,
        PRN,
      };

      return next();
    }

    const cache_data = await cache_middleware(req.decodedClaims.uid, req.decodedClaims.email);

    console.log("conffff: ", cache_data);

    PRN = cache_data.PRN;
    _class = cache_data._class;
    _division = cache_data._division;
    _year = cache_data._year;
    _branch = cache_data._branch;
  }

  const _payload = {
    PRN,
    _class,
    _division,
    _branch,
    _year,
  };

  req._payload = _payload;
  next();
};

module.exports = { add_nodes };

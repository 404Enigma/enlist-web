const admin = require("../db/db");
const db = admin.database();

const { get_PRN_by_email } = require("../utils/methods");
const assign = require("../lib/assign");

const { check_uid, get_PRN } = require("../../src/model/nodes");

const nodeCreate_prnsource = async (uid, PRN) => {
  let prn_source = {};
  prn_source["/PRN-Source/" + "/" + uid] = Number(PRN);
  await db.ref().update(prn_source);
};

const nodeCreate_source = async (uid, _class, _division, PRN) => {
  let source_class = {};
  source_class["/Source/" + _class + "/" + uid] = "";
  await db.ref().update(source_class);

  let source_division = {};
  source_division["/Source/" + _division + "/" + uid] = "";
  await db.ref().update(source_division);
};

const add_nodes = async (req, res, next) => {
  let PRN, _class, _division;

  if (!req.decodedClaims) {
    res.redirect("/login");
  } else {
    const status = await check_uid(req.decodedClaims.uid);

    console.log("Status: " + status);

    if (status == false) {
      PRN = await get_PRN_by_email(req.decodedClaims.email);
      _class = assign.check_class(PRN);
      _division = assign.check_division(PRN);
      await nodeCreate_prnsource(req.decodedClaims.uid, PRN);
      await nodeCreate_source(req.decodedClaims.uid, _class, _division, PRN);

      //update
    } else {
      PRN = await get_PRN(req.decodedClaims.uid);
      _class = assign.check_class(PRN);
      _division = assign.check_division(PRN);
    }

    const _payload = {
      PRN,
      _class,
      _division,
    };

    req._payload = _payload;
    next();
  }
};

module.exports = { nodeCreate_prnsource, add_nodes };

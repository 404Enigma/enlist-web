const admin = require("../db/db");
const db = admin.database();

const { get_PRN_by_email, get_status } = require("../utils/methods");
const assign = require("../lib/assign");

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
  if (!req.decodedClaims) {
    res.redirect("/login");
  } else {
    if (get_status(req.decodedClaims.email === false)) {
      const PRN = await get_PRN_by_email(req.decodedClaims.email);
      const _class = assign.check_class(PRN);
      const _division = assign.check_division(PRN);
      await nodeCreate_prnsource(req.decodedClaims.uid, PRN);
      await nodeCreate_source(req.decodedClaims.uid, _class, _division, PRN);
    }

    next();
  }
};

module.exports = { nodeCreate_prnsource, add_nodes };

const admin = require("../db/db");
const db = admin.database();

const { get_PRN_by_email } = require("../utils/methods");
const assign = require("../lib/assign");

const nodeCreate = async (uid, _class, PRN) => {
  let source = {};
  source["/Source/" + _class + "/" + uid] = "";
  await db.ref().update(source);

  let prn_source = {};
  prn_source["/PRN-Source/" + "/" + uid] = Number(PRN);
  await db.ref().update(prn_source);
};

const add_nodes = async (req, res, next) => {
  if (!req.decodedClaims) {
    res.redirect("/login");
  } else {
    const PRN = await get_PRN_by_email(req.decodedClaims.email);
    const _class = assign.check_class(PRN);
    const _division = assign.check_division(PRN);
    await nodeCreate(req.decodedClaims.uid, _class, PRN);
    next();
  }
};

module.exports = { nodeCreate, add_nodes };

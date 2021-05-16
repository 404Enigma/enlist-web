const admin = require("../db/db");
const db = admin.database();

const add_badge = async (req, res, next) => {
  if (!req.decodedClaims) {
    res.redirect("/login");
  } else {
    let badge = {};
    badge._class = await badge_count(req.decodedClaims.uid, req._payload._class);
    badge._division = await badge_count(req.decodedClaims.uid, req._payload._division);
    badge.personal = await badge_count(req.decodedClaims.uid, "Pvt");

    console.log(badge);
    req.badge = badge;
    next();
  }
};

const badge_count = async (uid, group) => {
  var ref = db.ref("To-Do-List/" + uid + "/" + group);
  const count = await ref.once("value").then(function (snapshot) {
    return snapshot.numChildren();
  });

  return count;
};

module.exports = { badge_count, add_badge };

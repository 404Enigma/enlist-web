const admin = require("../../src/db/db");
const db = admin.firestore();

const docRef = db.collection("Member Access");

const checkUID = (req, res) => {
  const { email, PRN } = req.body;

  docRef
    .doc(email)
    .get()
    .then(async (doc) => {
      if (doc.exists) {
        if (Number(doc.data().PRN) === Number(PRN)) {
          res.send("matched");
        } else {
          res.send("PRN is wrong!");
        }
      } else {
        res.send("Access using ENLIST's guest portal !");
      }
    });
};

const logout = async (req, res) => {
  res.clearCookie("__session");
  res.redirect("/");
};

module.exports = { checkUID, logout };

const admin = require("../../src/db/db");
const db = admin.firestore();

const docRef = db.collection("Member Access");
const { logout_status } = require("../utils/methods");

const checkUID = (req, res) => {
  console.log(req.body);
  const { email, PRN } = req.body;

  docRef
    .doc(email)
    .get()
    .then(async (doc) => {
      if (doc.exists) {
        console.log(doc.data());

        console.log("Your entered prn: ", Number(PRN));
        console.log("prn form database: ", doc.data().PRN);

        if (doc.data().PRN === Number(PRN)) {
          res.send("matched");
        } else {
          res.send("PRN is wrong");
        }
      } else {
        res.send("Email Document does not exist");
      }
    });
};

const logout = async (req, res) => {
  // if (req.decodedClaims) {
  //   await logout_status(req.decodedClaims.email);
  // }

  res.clearCookie("__session");
  res.redirect("/");
};

module.exports = { checkUID, logout };

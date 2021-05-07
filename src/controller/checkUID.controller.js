const admin = require("../../src/db/db");
const db = admin.firestore();

var docRef = db.collection("Member Access");

const checkUID = (req, res) => {
  console.log(req.body);
  const { email, PRN } = req.body;

  docRef
    .doc(email)
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log(doc.data());

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

module.exports = { checkUID };

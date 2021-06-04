const admin = require("../db/db");
const db = admin.firestore();

const docRef = db.collection("Member Access");

const get_metadata = async (email) => {
  const doc = await docRef.doc(email).get();
  if (!doc.exists) {
    console.log("No such document!");
  } else {
    console.log("Document data:", doc.data());
    return { PRN: doc.data().PRN, _class: doc.data().Class, _division: doc.data().SubClass };
  }
};

module.exports = { get_metadata };

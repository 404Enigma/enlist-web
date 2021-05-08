const admin = require("../db/db");
const db = admin.firestore();

const docRef = db.collection("Member Access");

const get_PRN_by_email = async (email) => {
  const doc = await docRef.doc(email).get();
  if (!doc.exists) {
    console.log("No such document!");
  } else {
    console.log("Document data:", doc.data());
    return doc.data().PRN;
  }
};

module.exports = { get_PRN_by_email };

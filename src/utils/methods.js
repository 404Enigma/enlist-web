const admin = require("../db/db");
const db = admin.firestore();

const get_PRN_by_email = async (email) => {
  const docRef = db.collection("Member Access").doc(email);
  const doc = await docRef.get();
  if (!doc.exists) {
    console.log("No such document!");
  } else {
    console.log("Document data:", doc.data());
    return doc.data().PRN;
  }
};

module.exports = { get_PRN_by_email };

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

const logout_status = (email) => {
  docRef.doc(email).update({
    status: false,
  });
};

const get_status = async (email) => {
  const doc = await docRef.doc(email).get();
  if (!doc.exists) {
    console.log("No such document!");
  } else {
    return doc.data().status;
  }
};

module.exports = { get_PRN_by_email, logout_status, get_status };

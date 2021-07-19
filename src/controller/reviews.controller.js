const admin = require("../../src/db/db");
const db = admin.firestore();
const reviewRef = db.collection("Reviews");

const add_review = async (req, res) => {
  const { name, email, text, rating } = req.body;

  try {
    await reviewRef.doc(email).set({ name: name, email: email, description: text, rating: rating });
    return res.json("success");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { add_review };

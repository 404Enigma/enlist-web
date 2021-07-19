const admin = require("../../src/db/db");
const db = admin.firestore();
const reviewRef = db.collection("Reviews");

var moment = require("moment");
moment().format();

const add_review = async (req, res) => {
  const { name, email, text, rating } = req.body;

  try {
    await reviewRef.doc(email).set({ name: name, email: email, description: text, rating: rating, created_at: moment().unix() });
    return res.json("success");
  } catch (error) {
    console.log(error);
  }
};

const get_reviews = async (req, res) => {
  let reviews_data = [];
  let review_obj = {};
  const snapshot = await reviewRef.orderBy("created_at").get();
  snapshot.forEach((doc) => {
    review_obj = doc.data();

    review_obj.created_at = moment.unix(review_obj.created_at).format("DD MMMM YYYY");

    reviews_data.push(review_obj);
  });

  //   console.log(reviews_data);

  res.render("pages/review", { reviews_data });
};

// const a = moment.unix(1626713565951).format("DD MMMM YYYY");
// console.log(a);

module.exports = { add_review, get_reviews };

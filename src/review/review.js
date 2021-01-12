const db = firebase.firestore();
const RefToken = db.collection("Review");

const reviewsEl = document.querySelector(".supaviews__list");
//var myTimestamp = firebase.firestore.Timestamp.fromDate(new Date());

function handleForm() {
  const form = document.getElementById("review");
  const obj = {};
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    for (let key of formData.keys()) {
      obj[key] = formData.get(key);
      obj.created_at = firebase.firestore.Timestamp.fromDate(new Date());
      console.log(obj[key]);
    }
    console.log(obj);
    console.log(formData);

    // INSERT a new review
    //const { error } = await supabase.from("supaviews").insert([obj]);

    RefToken.doc(obj.email)
      .set(obj)
      .then(function () {
        console.log("Success");
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });

    // if (error) {
    //   renderError(`ERROR: ${error.message}`);
    //   return;
    // }

    form.reset();
    //renderReviews();
    renderReviews();
  });
}

async function renderReviews() {
  reviewsEl.innerHTML = "";

  RefToken.get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      reviewsEl.prepend(renderReview(doc.data()));
    });
  });
}

function renderReview(review) {
  console.log(review);
  const { name, message, email, created_at } = review;
  const stars = renderStars(review.rate);

  console.log(name);
  console.log(message);
  console.log(email);
  console.log(created_at.toDate().toDateString());
  console.log(stars);

  const element = document.createElement("DIV");
  element.classList.add("supaview");
  element.innerHTML = `
    <div class="supaview__stars">${stars}</div>
    <div class="supaview__message">${message}</div>
		<div class="supaview__name">${name}</div>
		<div class="supaview__date">${created_at.toDate().toDateString()}</div>
	`;
  //<div class="supaview__stars">${stars}</div>
  return element;
}

function renderStars(rate) {
  let rating = "";
  for (let i = 0; i < 5; i++) {
    rating += `<i class="fas fa-star ${i < rate ? "checked" : ""}"></i>`;
  }
  return rating;
}

handleForm();
renderReviews();

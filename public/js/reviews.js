let review_form = document.getElementById("review_form");

if (typeof review_form != "undefined" && review_form != null) {
  // Exists.
  review_form.addEventListener("submit", async (e) => {
    e.preventDefault();

    let formData = new FormData(review_form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    axios({
      method: "post",
      url: "/reviews",
      data: data,
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  });
}

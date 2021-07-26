$(document).ready(function () {
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
  });
});

$("#liveToast").toast("show");

const un_IMP_class = document.getElementById("unimportant_class");
const un_IMP_division = document.getElementById("unimportant_division");
const un_IMP_personal = document.getElementById("unimportant_personal");

if (typeof un_IMP_class != "undefined" && un_IMP_class != null) {
  un_IMP_class.addEventListener("click", () => {
    console.log("imp clicked");
    var keyID = document.getElementById("data-taskkey");
    var key = keyID.getAttribute("data-taskkey");

    console.log(key);
    let data = { key };

    axios({
      method: "post",
      url: "/tasks/unimportant/class",
      data,
    })
      .then(function (response) {
        console.log(response);
        location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  });
}

if (typeof un_IMP_division != "undefined" && un_IMP_division != null) {
  un_IMP_division.addEventListener("click", () => {
    var keyID = document.getElementById("data-taskkey");
    var key = keyID.getAttribute("data-taskkey");

    console.log(key);
    let data = { key };

    axios({
      method: "post",
      url: "/tasks/unimportant/division",
      data,
    })
      .then(function (response) {
        console.log(response);
        location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  });
}

if (typeof un_IMP_personal != "undefined" && un_IMP_personal != null) {
  un_IMP_personal.addEventListener("click", () => {
    var keyID = document.getElementById("data-taskkey");
    var key = keyID.getAttribute("data-taskkey");

    console.log(key);
    let data = { key };

    axios({
      method: "post",
      url: "/tasks/unimportant/class",
      data,
    })
      .then(function (response) {
        console.log(response);
        location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  });
}

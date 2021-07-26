var limitdate = new Date().toISOString().slice(0, 10);
$("#limitdate").attr("min", limitdate);

var deadline_edit11 = new Date().toISOString().slice(0, 10);
$("#deadline_edit11").attr("min", deadline_edit11);

const add_form_class = document.getElementById("add_task_class");
const add_form_division = document.getElementById("add_task_division");
const add_form_personal = document.getElementById("add_task_personal");
const update_form_class = document.getElementById("update_task_class");
const update_form_division = document.getElementById("update_task_division");
const update_form_personal = document.getElementById("update_task_personal");

if (typeof add_form_class != "undefined" && add_form_class != null) {
  // Exists.
  add_form_class.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log({ data });

    axios({
      method: "post",
      url: "/tasks/addTask/class",
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

if (typeof add_form_division != "undefined" && add_form_division != null) {
  // Exists.
  add_form_division.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log({ data });

    axios({
      method: "post",
      url: "/tasks/addTask/division",
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

if (typeof add_form_personal != "undefined" && add_form_personal != null) {
  // Exists.
  add_form_personal.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.categorie = "private";
    console.log({ data });

    axios({
      method: "post",
      url: "/tasks/addTask/personal",
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

if (typeof update_form_class != "undefined" && update_form_class != null) {
  // Exists.
  console.log("classssss");
  update_form_class.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.categorie = "private";
    const keyID = document.getElementById("data-taskkey");
    const key = keyID.getAttribute("data-taskkey");
    const created = keyID.getAttribute("data-created_at");

    console.log(created);
    data.key = key;
    data.created = created;

    console.log({ data });

    axios({
      method: "post",
      url: "/tasks/updateTask/class",
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

if (typeof update_form_division != "undefined" && update_form_division != null) {
  // Exists.
  update_form_division.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.categorie = "private";
    var keyID = document.getElementById("data-taskkey");
    var key = keyID.getAttribute("data-taskkey");
    const created = keyID.getAttribute("data-created_at");

    console.log(created);
    data.key = key;
    data.created = created;

    console.log({ data });

    axios({
      method: "post",
      url: "/tasks/updateTask/division",
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

if (typeof update_form_personal != "undefined" && update_form_personal != null) {
  // Exists.
  update_form_personal.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.categorie = "private";

    var keyID = document.getElementById("data-taskkey");
    var key = keyID.getAttribute("data-taskkey");
    const created = keyID.getAttribute("data-created_at");

    console.log(created);
    data.key = key;
    data.created = created;

    console.log({ data });

    axios({
      method: "post",
      url: "/tasks/updateTask/personal",
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

const IMP_class = document.getElementById("IMP_class");
const IMP_division = document.getElementById("IMP_division");
const IMP_personal = document.getElementById("IMP_personal");
const done_class = document.getElementById("done_class");
const done_division = document.getElementById("done_division");
const done_personal = document.getElementById("done_personal");
const trash_class = document.getElementById("trash_class");
const trash_division = document.getElementById("trash_division");
const trash_personal = document.getElementById("trash_personal");

if (typeof IMP_class != "undefined" && IMP_class != null) {
  IMP_class.addEventListener("click", () => {
    console.log("imp clicked");
    var keyID = document.getElementById("data-taskkey");
    var key = keyID.getAttribute("data-taskkey");

    console.log(key);
    let data = { key };

    axios({
      method: "post",
      url: "/tasks/important/class",
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

if (typeof IMP_division != "undefined" && IMP_division != null) {
  IMP_division.addEventListener("click", () => {
    console.log("imp clicked");
    var keyID = document.getElementById("data-taskkey");
    var key = keyID.getAttribute("data-taskkey");

    console.log(key);
    let data = { key };
    axios({
      method: "post",
      url: "/tasks/important/division",
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

if (typeof IMP_personal != "undefined" && IMP_personal != null) {
  IMP_personal.addEventListener("click", () => {
    console.log("imp clicked");
    var keyID = document.getElementById("data-taskkey");
    var key = keyID.getAttribute("data-taskkey");

    console.log(key);
    let data = { key };
    axios({
      method: "post",
      url: "/tasks/important/personal",
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

if (typeof done_class != "undefined" && done_class != null) {
  done_class.addEventListener("click", () => {
    console.log("done clicked");
    var keyID = document.getElementById("data-taskkey");
    var key = keyID.getAttribute("data-taskkey");

    const status = keyID.getAttribute("data-status");

    console.log(key);
    let data = { key, status };
    console.log("data: ", data);

    axios({
      method: "post",
      url: "/tasks/completed/class",
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

if (typeof done_division != "undefined" && done_division != null) {
  done_division.addEventListener("click", () => {
    console.log("done clicked");
    var keyID = document.getElementById("data-taskkey");
    var key = keyID.getAttribute("data-taskkey");

    const status = keyID.getAttribute("data-status");

    console.log(key);
    let data = { key, status };

    axios({
      method: "post",
      url: "/tasks/completed/division",
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

if (typeof done_personal != "undefined" && done_personal != null) {
  done_personal.addEventListener("click", () => {
    console.log("done clicked");
    var keyID = document.getElementById("data-taskkey");
    var key = keyID.getAttribute("data-taskkey");

    const status = keyID.getAttribute("data-status");

    console.log(key);
    let data = { key, status };

    axios({
      method: "post",
      url: "/tasks/completed/personal",
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

if (typeof trash_class != "undefined" && trash_class != null) {
  trash_class.addEventListener("click", () => {
    console.log("done clicked");
    const keyID = document.getElementById("data-taskkey");
    const key = keyID.getAttribute("data-taskkey");
    const status = keyID.getAttribute("data-status");

    console.log(key);
    let data = { key, status };

    axios({
      method: "post",
      url: "/tasks/delete/class",
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

if (typeof trash_division != "undefined" && trash_division != null) {
  trash_division.addEventListener("click", () => {
    console.log("done clicked");
    var keyID = document.getElementById("data-taskkey");
    var key = keyID.getAttribute("data-taskkey");

    const status = keyID.getAttribute("data-status");

    console.log(key);
    let data = { key, status };

    axios({
      method: "post",
      url: "/tasks/delete/division",
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

if (typeof trash_personal != "undefined" && trash_personal != null) {
  trash_personal.addEventListener("click", () => {
    console.log("done clicked");
    var keyID = document.getElementById("data-taskkey");
    var key = keyID.getAttribute("data-taskkey");

    const status = keyID.getAttribute("data-status");

    console.log(key);
    let data = { key, status };

    axios({
      method: "post",
      url: "/tasks/delete/personal",
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

$(document).ready(function () {
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
  });
});

$("#liveToast").toast("show");

$(".task-details").click(function () {
  // var $domElement = $('.task-details');
  var title = $(this).data("title");
  var id = $(this).data("id");
  var description = $(this).data("description");
  var deadline = $(this).data("deadline");
  var created = $(this).data("created");
  var status = $(this).data("status");
  var sharedby = $(this).data("sharedby");

  const date = moment(deadline, "DD MMMM YYYY").format("YYYY-MM-DD");

  var created_at = moment.unix(created).format("DD MMMM YYYY");
  console.log(created_at);
  console.log(status);
  console.log("sharedby:", sharedby);

  $("#title_edit").val(title);
  $("#description_edit").val(description);
  $("#deadline_edit11").val(date);
  $("#created-at").text(created_at);
  $("#shared_by").text(sharedby);

  // document.getElementById("shared__by").innerHTML = "";
  // for (var x = 0; x < list_url.length; x++) {
  //   var html_insert = 'Shared by :<p id="shared_by"></p>';
  //   //console.log(html_insert);
  //   document.getElementById("shared__by").innerHTML += html_insert;
  // }

  $("#data-taskkey").attr("data-taskkey", id);
  $("#data-taskkey").attr("data-created_at", created);
  $("#data-taskkey").attr("data-status", status);

  console.log(title);
  console.log(id);
  console.log(description);
  console.log(deadline);
  console.log(date);
  console.log(created);
  console.log(created_at);
});

// $(".completed_task").click(function () {
//   const group = $(this).data("group");
//   const id = $(this).data("id");
//   const status = $(this).data("status");

//   let data = {};
//   data.key = id;
//   data.status = status;

//   console.log(group);
//   console.log(data);
//   if (confirm("Are you sure?")) {
//     axios
//       .delete("/completed/" + group, data)
//       .then(function (response) {
//         console.log(response);
//         //location.reload();
//       })
//       .catch(function (error) {
//         console.log(error);
//       });

//     location.reload();
//   }
// });

$("#complete_task_data").click(function () {
  var key = $(this).data("id");
  const status = $(this).data("status");

  console.log(key);
  let data = { key, status };
  console.log("data: ", data);

  axios({
    method: "post",
    url: "/tasks/completed/class",
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

// const complete_task = document.getElementById("complete_task");

// if (typeof complete_task != "undefined" && complete_task != null) {
//   complete_task.addEventListener("click", () => {
//     var keyID = document.getElementById("complete_task_data");
//     var key = keyID.getAttribute("data-id");
//     const status = keyID.getAttribute("data-status");

//     console.log(key);
//     let data = { key, status };
//     console.log("data: ", data);

//     axios({
//       method: "post",
//       url: "/tasks/completed/class",
//       data,
//     })
//       .then(function (response) {
//         console.log("response: " + response);
//         location.reload();
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   });
// }

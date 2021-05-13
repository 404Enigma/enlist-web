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
    });

    location.reload();
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
    });

    location.reload();
  });
}

if (typeof add_form_personal != "undefined" && add_form_personal != null) {
  // Exists.
  add_form_personal.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.categorie = "personal";
    console.log({ data });

    axios({
      method: "post",
      url: "/tasks/addTask/personal",
      data,
    });

    location.reload();
  });
}

if (typeof update_form_class != "undefined" && update_form_class != null) {
  // Exists.
  console.log("classssss");
  update_form_class.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.categorie = "personal";
    var keyID = document.getElementById("data-taskkey");
    var key = keyID.getAttribute("data-taskkey");

    data.key = key;

    console.log({ data });

    axios({
      method: "post",
      url: "/tasks/updateTask/class",
      data,
    });

    location.reload();
  });
}

if (typeof update_form_division != "undefined" && update_form_division != null) {
  // Exists.
  update_form_division.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.categorie = "personal";
    var keyID = document.getElementById("data-taskkey");
    var key = keyID.getAttribute("data-taskkey");

    data.key = key;

    console.log({ data });

    axios({
      method: "post",
      url: "/tasks/updateTask/division",
      data,
    });

    location.reload();
  });
}

if (typeof update_form_personal != "undefined" && update_form_personal != null) {
  // Exists.
  update_form_personal.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.categorie = "personal";

    var keyID = document.getElementById("data-taskkey");
    var key = keyID.getAttribute("data-taskkey");

    data.key = key;

    console.log({ data });

    axios({
      method: "post",
      url: "/tasks/updateTask/personal",
      data,
    });

    location.reload();
  });
}

const IMP_class = document.getElementById("IMP_class");
const IMP_division = document.getElementById("IMP_division");
const IMP_personal = document.getElementById("IMP_personal");
const done_class = document.getElementById("done_class");
const done_division = document.getElementById("done_division");
const done_personal = document.getElementById("done_personal");

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
    });

    location.reload();
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
    });

    location.reload();
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
    });

    location.reload();
  });
}

if (typeof done_class != "undefined" && done_class != null) {
  done_class.addEventListener("click", () => {
    console.log("done clicked");
    var keyID = document.getElementById("data-taskkey");
    var key = keyID.getAttribute("data-taskkey");

    console.log(key);
    let data = { key };

    axios({
      method: "post",
      url: "/tasks/completed/class",
      data,
    });

    location.reload();
  });
}

if (typeof done_division != "undefined" && done_division != null) {
  done_division.addEventListener("click", () => {
    console.log("done clicked");
    var keyID = document.getElementById("data-taskkey");
    var key = keyID.getAttribute("data-taskkey");

    console.log(key);
    let data = { key };

    axios({
      method: "post",
      url: "/tasks/completed/division",
      data,
    });

    location.reload();
  });
}

if (typeof done_personal != "undefined" && done_personal != null) {
  done_personal.addEventListener("click", () => {
    console.log("done clicked");
    var keyID = document.getElementById("data-taskkey");
    var key = keyID.getAttribute("data-taskkey");

    console.log(key);
    let data = { key };

    axios({
      method: "post",
      url: "/tasks/completed/personal",
      data,
    });

    location.reload();
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

  const date = moment(deadline, "DD MMMM YYYY").format("YYYY-MM-DD");

  var created_at = moment.unix(created).format("DD MMMM YYYY");
  console.log(created_at);

  $("#title_edit").val(title);
  $("#description_edit").val(description);
  $("#deadline_edit11").val(date);
  $("#created-at").text(created_at);

  $("#data-taskkey").attr("data-taskkey", id);

  console.log(title);
  console.log(id);
  console.log(description);
  console.log(deadline);
  console.log(date);
  console.log(created);
  console.log(created_at);
});

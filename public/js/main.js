const add_form_class = document.getElementById("add_task_class");
const add_form_division = document.getElementById("add_task_division");
const add_form_personal = document.getElementById("add_task_personal");
const update_form_class = document.getElementById("update_task_class");
const update_form_division = document.getElementById("update_form_division");
const update_form_personal = document.getElementById("update_form_personal");

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
  update_form_class.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.categorie = "personal";
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
    console.log({ data });

    axios({
      method: "post",
      url: "/tasks/updateTask/personal",
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

  $("#data-id").data("key", id);
  console.log(title);
  console.log(id);
  console.log(description);
  console.log(deadline);
  console.log(date);
  console.log(created);
  console.log(created_at);
});

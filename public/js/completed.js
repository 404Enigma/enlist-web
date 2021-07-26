$(document).ready(function () {
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
  });
});

$(".delete-task").click(function () {
  var group = $(this).data("group");
  var id = $(this).data("id");

  const status = $(this).data("status");

  let data = {};
  data.key = id;
  data.status = status;

  console.log(group);
  console.log(data);
  document.getElementById("modal__content").innerHTML = "Task has been deleted!";
  $("#liveToast").toast("show");
  axios
    .delete("/tasks/trash/" + group, { data })
    .then(function (response) {
      console.log(response);
      location.reload();
    })
    .catch(function (error) {
      console.log(error);
    });
});

$(".restore-task").click(function () {
  var group = $(this).data("group");
  var id = $(this).data("id");

  let data = {};
  data.key = id;

  console.log(group);
  console.log(data);
  document.getElementById("modal__content").innerHTML = "Task has been restored!";
  $("#liveToast").toast("show");
  axios
    .post("/tasks/restore/" + group, { data })
    .then(function (response) {
      console.log(response);
      location.reload();
    })
    .catch(function (error) {
      console.log(error);
    });
});

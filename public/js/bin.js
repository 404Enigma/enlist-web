$(document).ready(function () {
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
  });
});

$("#liveToast").toast("show");

$(".delete-task").click(function () {
  var group = $(this).data("group");
  var id = $(this).data("id");

  let data = {};
  data.key = id;

  console.log(group);
  console.log(data);
  if (confirm("Are you sure?")) {
    axios
      .delete("/tasks/trash/bin/" + group, { data })
      .then(function (response) {
        console.log(response);
        //location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });

    location.reload();
  }
});

$(".restore-task").click(function () {
  var group = $(this).data("group");
  var id = $(this).data("id");

  let data = {};
  data.key = id;

  console.log(group);
  console.log(data);
  if (confirm("Are you sure you want to restore?")) {
    axios
      .post("/tasks/restore/bin/" + group, { data })
      .then(function (response) {
        console.log(response);
        //location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });

    location.reload();
  }
});

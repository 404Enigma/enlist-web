const form = document.getElementById("add_task");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  console.log({ data });

  axios({
    method: "post",
    url: "/tasks/add",
    data,
  });

  location.reload();
});

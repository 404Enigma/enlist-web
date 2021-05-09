const form_class = document.getElementById("add_task_class");
const form_division = document.getElementById("add_task_division");
const form_personal = document.getElementById("add_task_personal");

if (typeof form_class != "undefined" && form_class != null) {
  // Exists.
  form_class.addEventListener("submit", async (e) => {
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

if (typeof form_division != "undefined" && form_division != null) {
  // Exists.
  form_division.addEventListener("submit", async (e) => {
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

if (typeof form_personal != "undefined" && form_personal != null) {
  // Exists.
  form_personal.addEventListener("submit", async (e) => {
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

const express = require("express");
const ejs = require("ejs");
const path = require("path");

const app = express();
const PORT = 3000;
app.use(express.static("public"));
app.set("view engine", "ejs");

const home = require("./routes/home/home");
const login = require("./routes/login/login");
const review = require("./routes/review/review");
const tasks = require("./routes/tasks/tasks");

app.use(home);
app.use("/login", login);
app.use("/review", review);
app.use("/tasks", tasks);

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});

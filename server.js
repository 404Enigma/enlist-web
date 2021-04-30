const express = require("express");
const ejs = require("ejs");
const path = require("path");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");

const app = express();

//const csrfMiddleware = csrf({ cookie: true });

const PORT = process.env.port || 3000;
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cookieParser());

// app.all("*", (req, res, next) => {
//   res.cookie("XSRF-TOKEN", req.csrfToken());
//   next();
// });

app.use(require("./routes/index"));
app.use(require("./routes/login/login"));
app.use("/tasks", require("./routes/tasks/tasks"));

app.get("/logout", (req, res) => {
  res.clearCookie("__session");
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});

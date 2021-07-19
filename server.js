const express = require("express");
const ejs = require("ejs");
const path = require("path");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8080;
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
app.use(require("./routes/reviews"));
app.use(require("./routes/login/login"));
app.use("/tasks", require("./routes/tasks/tasks"));

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});

const express = require("express");
const ejs = require("ejs");
const path = require("path");

const app = express();
const PORT = 3000;
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("pages/index");
});

app.get("/login", function (req, res) {
  res.render("pages/login");
});

app.get("/home", function (req, res) {
  res.render("pages/home");
});

app.get("/review", function (req, res) {
  res.render("pages/review");
});

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});

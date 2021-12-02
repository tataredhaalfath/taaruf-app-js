const express = require("express");
const app = express();
const morgan = require("morgan");
const expressLayout = require("express-ejs-layouts");
const AdminRoutes = require("./routes/AdminRoutes");
//view engine ejs
app.set("view engine", "ejs");
app.use(expressLayout);
//morgan
app.use(morgan("dev"));
//static folder
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());
//route
app.get("/", (req, res) => {
  res.render("pages/home", {
    layout: "layouts/main-layouts",
    title: "home page",
  });
});
app.get("/stories", (req, res) => {
  res.render("pages/stories", {
    layout: "layouts/main-layouts",
    title: "Stories Page",
  });
});
app.get("/taaruf", (req, res) => {
  res.render("pages/taaruf", {
    layout: "layouts/main-layouts",
    title: "Taaruf Page",
  });
});
app.get("/taaruf/detail", (req, res) => {
  res.render("pages/detail", {
    layout: "layouts/main-layouts",
    title: "Detail Page",
  });
});
app.get("/taaruf/detail/check", (req, res) => {
  res.render("pages/check", {
    layout: "layouts/check-layouts",
    title: "Check Page",
  });
});
app.get("/taaruf/success", (req, res) => {
  res.render("pages/success", {
    layout: "layouts/check-layouts",
    title: "Success",
  });
});

// route admin
app.use(AdminRoutes);
app.listen(5000, () => {
  console.log("server listen at http://localhost:5000");
});

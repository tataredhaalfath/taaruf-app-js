const express = require("express");
const app = express();
const morgan = require("morgan");
const expressLayout = require("express-ejs-layouts");

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

app.listen(5000, () => {
  console.log("server listen at http://localhost:5000");
});

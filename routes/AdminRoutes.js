const express = require("express");
const app = express();
const AdminController = require("../controllers/admin/AdminController");

app.get("/admin/dashboard", AdminController.index);

module.exports = app;

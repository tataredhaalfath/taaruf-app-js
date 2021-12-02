module.exports = {
  index: (req, res) => {
    res.render("pages/admin/dashboard", {
      layout: "layouts/admin/admin",
      title: "Dashboard",
    });
  },
};

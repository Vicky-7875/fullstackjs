const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "My Home apge",
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    title: "My about apge",
  });
});

router.get("/download", (req, res) => {
  res.download(path.join(__dirname, "public", "images", "icon.png"));
});

router.get("*", (req, res, next) => {
  res.render("404", {
    title: "404 Not Found",
  });
});
module.exports = router;

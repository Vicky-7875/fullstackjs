const router = require("express").Router();
const apiKeyMiddleWare = require("../middlewares/apiKey");

// router.use(apiKeyMiddleWare); ///apply for all api

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



// router.get("/api/products", apiKeyMiddleWare, (req, res) => {
//   //for multiple middleware use[middleware,middleware]
//   // router.get("/api/products", (req, res) => {
//   res.json([
//     {
//       id: 1234,
//       name: "chrome",
//     },
//     {
//       id: 1234567,
//       name: "IEE",
//     },
//     {
//       id: 324324,
//       name: "mozila",
//     },
//   ]);
// });

router.get("/download", (req, res) => {
  res.download(path.join(__dirname, "public", "images", "icon.png"));
});

// router.get("*", (req, res, next) => {
//   res.render("404", {
//     title: "404 Not Found",
//   });
// });
module.exports = router;

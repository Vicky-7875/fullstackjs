const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

const mainRouter = require("./routes");

/**view engine*/
app.set("view engine", "ejs");
// app.set("views", path.resolve(__dirname) + `/templates`); // for change name of views
// console.log(app.get('view engine'))
// console.log(app.get("views"));

//static middleware
// app.use(express.static("public"));
// app.use('/api',mainRouter); //for prefix
app.use(mainRouter);

/**Routes */
// app.get("/", (req, res, next) => {
//   //for public html file access
//   // res.sendFile(path.join(__dirname, "public", "index.html"));

//   //view engine access file
//   res.render("index", {
//     title: "My home page",
//   });
// });

// app.get("/about", (req, res, next) => {
//   // res.sendFile(path.join(__dirname, "public", "about.html"));
//   res.render("about", {
//     title: "My About page",
//   });
// });

// app.get("/download", (req, res, next) => {
//   // res.render("download");
// });

// /**404 page */
// app.get("*", (req, res, next) => {
//   // res.sendFile(path.join(__dirname, "public", "404.html"));
//   res.render("404");
// });

app.listen(PORT, () => console.log(`listing on http://localhost:${PORT}`));

//PORT=5000 node server.js
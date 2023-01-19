const mongoose = require("mongoose");
const url = "mongodb://localhost/comments";

function dbConnect() {
  //db connection

  mongoose.connect(url, {
    // userNewUrlParser: true,
    // userUnifiedTopology: true,
    // userFindAndModify: true,
  });

  const connection = mongoose.connection;
  connection
    .once("open", () => {
      console.log("database connected");
    })
    .on("error", function (err) {
      console.log(err);
    });
}

module.exports = dbConnect;

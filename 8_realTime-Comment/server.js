const express = require("express");
const app = express();
const dbConnect = require("./db");
const Commnet = require("./models");

const port = process.env.PORT || 4571;

app.use(express.static("public"));

//db connection
dbConnect();

app.use(express.json());

//routes
app.post("/api/comments", (req, res) => {
  const comment = new Commnet({
    userName: req.body.userName,
    comment: req.body.comment,
  });

  comment.save().then((response) => {
    res.send(response);
  });
});

app.get("/api/comments", (req, res) => {
  Commnet.find().then((comments) => {
    res.json(comments);
  });
});

const server = app.listen(port, () => {
  console.log(`listing on port ${port}`);
});

let io = require("socket.io")(server);

io.on("connection", (socket) => {
  console.log(`New Connection ${socket.id}`);

  //receive event from web
  socket.on("comment", (data) => {
    // {userName:'s',comment:'asdsa',time:Date()} //we modfied data
    data.time = Date();
    socket.broadcast.emit("comment", data);
  });

  socket.on("typing", (data) => {
    socket.broadcast.emit("typing", data);
  });
});

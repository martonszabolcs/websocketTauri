const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/currentSong", function (req, res) {
  console.log(req.query);
  res.send("ja");
});

io.on("connection", function (socket) {
  console.log("a user connected", socket.id);

  socket.on("ping", (callback) => {
    callback();
  });

  socket.on("userData", async function (userData) {
    socket.userData = userData;
    const sockets = await io.fetchSockets();
    io.emit(
      "user-connected",
      sockets.map((e) => e.userData)
    );
  });
  socket.on("metronome", function (msg) {
    io.emit("metronome", msg);
  });
});

io.on("disconnect", function () {
  console.log("user disconnected");
});

server.listen(1616, function () {
  console.log("listening on *:1616");
});

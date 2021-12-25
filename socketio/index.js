const io = require("socket.io")(8800, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

let users = [];

const establish = (uid, socket) => {
  !users.some((user) => user.uid === uid) && users.push({ uid, socket });
};

const breaking = (socketid) => {
  users = users.filter((s) => s.socket !== socketid);
};

const finding = (userId) => {
  return users.find((u) => u.uid === userId);
};

io.on("connection", (socket) => {
  console.log("Connected");
  socket.on("sending", (uid) => {
    establish(uid, socket.id);
    io.emit("getting", users);
  });

  socket.on("messagesending", ({ sender, reciever, text }) => {
    const gett = finding(reciever);
    io.to(gett.socket).emit("sent", {
      sender,
      text,
    });
  });

  socket.on("disconnect", () => {
    console.log("disconnect");
    breaking(socket.id);
    io.emit("getting", users);
  });
});

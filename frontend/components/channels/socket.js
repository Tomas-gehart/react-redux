const server = require("http").createServer();
const io = require("socket.io")(server);

const PORT = 3000;
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";

io.on("connection", (socket) => {
  console.log(`Client ${socket.id} connected`);

  // Join a conversation
  const { channelsId } = socket.handshake.query;
  socket.join(channelsId);

  // Listen for new messages
  socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
    io.in(channelsId).emit(NEW_CHAT_MESSAGE_EVENT, data);
  });

  // Leave the channels if the user closes the socket
  socket.on("disconnect", () => {
    console.log(`Client ${socket.id} diconnected`);
    socket.leave(channelsId);
  });
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

import React from "react";

import useChat from "./usechat";

<<<<<<< HEAD

const Chatroom = (props) => {
=======
const ChatRoom = (props) => {
>>>>>>> 72dba118522b75e7535dbe7f8eee108456e9ad84
  const { roomId } = props.match.params;
  const { messages, sendMessage } = useChat(roomId);
  const [newMessage, setNewMessage] = React.useState("");

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <div className="chat-room-container">
<<<<<<< HEAD
      <h1 className="room-name">room: {roomId}</h1>
=======
      <h1 className="room-name">Room: {roomId}</h1>
>>>>>>> 72dba118522b75e7535dbe7f8eee108456e9ad84
      <div className="messages-container">
        <ol className="messages-list">
          {messages.map((message, i) => (
            <li
              key={i}
              className={`message-item ${
                message.ownedByCurrentUser ? "my-message" : "received-message"
              }`}
            >
              {message.body}
            </li>
          ))}
        </ol>
      </div>
      <textarea
        value={newMessage}
        onChange={handleNewMessageChange}
        placeholder="Write message..."
        className="new-message-input-field"
      />
      <button onClick={handleSendMessage} className="send-message-button">
        Send
      </button>
    </div>
  );
};

<<<<<<< HEAD
export default Chatroom;
=======
export default ChatRoom;
>>>>>>> 72dba118522b75e7535dbe7f8eee108456e9ad84

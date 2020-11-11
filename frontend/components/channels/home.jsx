import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [roomName, setroomName] = React.useState("");

  const handleroomNameChange = (event) => {
    setroomName(event.target.value);
  };

  return (
    <div className="home-container">
      <input
        type="text"
        placeholder="room"
        value={roomName}
        onChange={handleroomNameChange}
        className="text-input-field"
      />
      <Link to={`/room/${roomName}`} className="enter-room-button">
        Join room
      </Link>
    </div>
  );
};

export default Home;
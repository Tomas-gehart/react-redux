import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
<<<<<<< HEAD
  const [roomName, setroomName] = React.useState("");

  const handleroomNameChange = (event) => {
    setroomName(event.target.value);
=======
  const [roomName, setRoomName] = React.useState("");

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
>>>>>>> 72dba118522b75e7535dbe7f8eee108456e9ad84
  };

  return (
    <div className="home-container">
      <input
        type="text"
<<<<<<< HEAD
        placeholder="room"
        value={roomName}
        onChange={handleroomNameChange}
        className="text-input-field"
      />
      <Link to={`/room/${roomName}`} className="enter-room-button">
=======
        placeholder="Room"
        value={roomName}
        onChange={handleRoomNameChange}
        className="text-input-field"
      />
      <Link to={`/channel/${roomName}`} className="enter-room-button">
>>>>>>> 72dba118522b75e7535dbe7f8eee108456e9ad84
        Join room
      </Link>
    </div>
  );
};

export default Home;
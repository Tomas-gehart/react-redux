import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [channelsName, setchannelsName] = React.useState("");

  const handlechannelsNameChange = (event) => {
    setchannelsName(event.target.value);
  };

  return (
    <div className="home-container">
      <input
        type="text"
        placeholder="channels"
        value={channelsName}
        onChange={handlechannelsNameChange}
        className="text-input-field"
      />
      <Link to={`/channels/${channelsName}`} className="enter-channels-button">
        Join channels
      </Link>
    </div>
  );
};

export default Home;
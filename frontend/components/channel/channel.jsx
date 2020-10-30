import React from "react";
import ChannelHeaderContainer from "../channel/channel_header";

class Channel extends React.Component {

  render() {
    return (
      <div className="channel">
        <ChannelHeaderContainer />
      </div>
    );
  }
}

export default Channel;

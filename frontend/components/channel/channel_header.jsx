import React from "react";

class ChannelHeader extends React.Component {
  componentDidMount() {
    this.props.fetchChannel(this.props.match.params.channelId);
    this.props.fetchUsers();
  }

  render() {
    let channelName = "";
    if (this.props.channel) {
      channelName = this.props.channel.name;
    }

    return (
      <div className="channel-header">
        <h1>{channelName}</h1>
        <span className="channel-header-1">
          <span className="channel-header-2">
            {this.props.numUsers(this.props.match.params.channelId)}
          </span>
        </span>
      </div>
    );
  }
}

export default ChannelHeader;

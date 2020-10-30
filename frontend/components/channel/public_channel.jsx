import React from "react";
import { withRouter } from "react-router";

class PublicChannelForm extends React.Component {


  constructor(props) {
    super();
    this.state = {
      newChannelName: "",
    };

    this.handleCreateChannel = this.handleCreateChannel.bind(
      this
    );
  }

  handleCreateChannel(e) {
    this.props.processForm({
      name: this.state.newChannelName,
      direct_message_channel: false,
    });
    this.props.closeModal();
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.target.value,
      });
  }

  render() {
    return (
      <div className="public-channel-form-div">
        <h1>Create a Channel</h1>
        <form onSubmit={this.handleCreateChannel}>
          <input
            type="text"
            value={this.state.newChannelName}
            onChange={this.update("newChannelName")}
            placeholder="# e.g. 6lack Collab"
          />
          <input type="submit" value="GO" />
        </form>
      </div>
    );
  }
}

export default withRouter(PublicChannelForm);

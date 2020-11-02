import React from "react";
import { withRouter } from "react-router";

class PrivateChannelForm extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchChannels();
  }

  constructor(props) {
    super();
    this.state = {
      newPrivateChannel: "",
      selectedUsers: [],
      privateChannels: this.props.privateChannels,
    };
    this.handleCreatePrivate = this.handleCreatePrivate.bind(
      this
    );
    this.addUsers = this.addUsers.bind(this);
    this.filterChannels = this.filterChannels.bind(this);
    this.removeSelectedChannels = this.removeSelectedCHannels.bind(this);
  }

  handleCreatePrivate(e) {
    let newPrivateChannel = this.state.newPrivateChannel;
    let selectedUsers = this.state.selectedUsers.slice(0);
    if (this.state.newPrivateChannel === "") {
      selectedUsers.push(this.props.currentUser);
      const selectedUsernames = selectedUsers.map((user) => {
        return user.username;
      });
      newPrivateChannel = selectedUsernames.join(", ");
    }
    this.props.processForm(
      { name: newPrivateChannel, direct_message_channel: true },
      this.state.selectedUsers
    ); 
    this.props.closeModal();
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.target.value,
      });
  }

  addUsers(privateChannel) {
    let channelUsers = this.props.getJoinedUsers(privateChannel.id);
    let channelUsersIds = channelUsers.map((user) => user.id);
    return (e) => {
      if (channelUsersIds.length === 1) {

        this.props.history.push("/channels/" + privateChannel.id);
        this.props.closeModal();
      }

      let selectedUsers = this.state.selectedUsers.slice(0);

      channelUsers.forEach((user) => {
        if (
          !selectedUsers.includes(user) &&
          user.id != this.props.currentUser.id
        ) {
          selectedUsers.push(user);
        }
      });
      this.setState({
        selectedUsers: selectedUsers,

      });
    };
  }

  removeSelectedChannels(user) {
    return (e) => {
      let selectedUsers = this.state.selectedUsers
        .slice(0)
        .filter((el) => el.id != user.id);
      this.setState({
        selectedUsers: selectedUsers,
      });
    };
  }

  filterChannels(e) {
    const input = e.target.value;
    this.setState({
      privateChannels: this.props.privateChannels.filter((channel) =>
        channel.name.includes(input)
      ),
    });
  }

  render() {
    const privateChannels = this.state.privateChannels.map(
      (privateChannel, i) => {
        const channelUsers = this.props.getJoinedUsers(privateChannel.id);
        const channelAuthor = channelUsers.filter(
          (user) => user.id === privateChannel.author_id
        )[0];
        debugger;
        return (
          <div onClick={this.addUsers(privateChannel)}>
            {channelAuthor && channelAuthor.profile_pic_url ? (
              <img
                className="pro-pic"
                src={channelAuthor.profile_pic_url}
              />
            ) : (
              <div className="pro-pic" />
            )}
            <li key={i}>{privateChannel.name}</li>
          </div>
        );
      }
    );
    let usernamesToList = this.state.selectedUsers.map((user, i) => {
      return (
        <span
          key={i}
          className="private-channel"
          onClick={this.removeSelectedCHannels(user)}
        >
          <div
            className="profile-pic"

          />
          <span className="private-channel-user">
            {user.username}
          </span>
          <span className="private-channel-1"> x</span>
        </span>
      );
    });

    return (
      <div className="private-channel-2">
        <h1>Create New Private Channel</h1>
        <form onSubmit={this.handleCreatePrivate}>
          <label
            className="private-channel-3"
            for="private-channel-4"
          >
            Name
          </label>
          <input
            className="private-channel-4"
            type="text"
            value={this.state.newPrivateChannel}
            onChange={this.update("newPrivateChannel")}
            placeholder="# e.g. 6lack"
          />
          <br />
          <div className="private-channel-5">
            <input
              className="private-channel-6"
              type="text"
              onChange={this.filterChannels}
              placeholder="Find or start a conversation"
            />
            <input type="submit" value="Go" />
          </div>
          <div className="userlist">{usernamesToList}</div>
          <ul className="private-channel-7">
            {privateChannels}
          </ul>
        </form>
      </div>
    );
  }
}

export default withRouter(PrivateChannelForm);

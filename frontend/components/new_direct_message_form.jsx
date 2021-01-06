import React from "react";
import moment from "moment";
moment().format();

class NewDMForm extends React.Component {
  constructor(props) {
    super();

    this.state = {
      title: "",
      description: "",
      channel_or_dm: "dm",
      channel_type: "private",
      users: [],
      searchValue: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);

    this.formatTitle = this.formatTitle.bind(this);

    this.doesDmExist = this.doesDmExist.bind(this);

    this.displayTitle = this.displayTitle.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.state.title = this.formatTitle(this.state.users);
    const channelsArray = Object.values(this.props.channels);
    const channelTitlesArray = channelsArray.map((channel) => channel.title);

    if (channelTitlesArray.includes(this.state.title)) {
      const channelIdx = channelTitlesArray.indexOf(this.state.title);
      const channel = channelsArray[channelIdx];
      this.props.history.push(`/channels/${channel.id}`);
      this.props.closeModal();
    } else {
      const channel = Object.assign({}, this.state);
      this.props.createChannel(channel).then((channel) => {
        this.props.history.push(`/channels/${channel.channel.id}`);
        this.props.closeModal();
      });
    }
  }

  handleInput(type) {
    return (event) => {
      this.setState({
        [type]: event.target.value,
      });
    };
  }

  formatTitle(users) {
    if (users.length > 0) {
      const allUsers = users.concat(
        this.props.users[this.props.currentUser].email
      );
      return allUsers.sort().join(", ");
    } else return this.state.title;
  }
}

export default NewDMForm;
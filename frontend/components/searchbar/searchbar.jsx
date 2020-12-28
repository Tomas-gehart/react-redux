import React from "react";
import { Link } from "react-router-dom";

export default class Searchbar extends React.Component {
  constructor(props) {
    super();

    this.state = { searchValue: "" }; //search via string val

    this.filteredChannelsArray = Object.values(this.props.channels) //rework this
      .filter((channel) => { //filter by channel
        return channel.users
          .map((user) => user.id)
          .includes(this.props.currentUser.id);
      })
      .sort((a, b) => { //rework this logic
        const aTitle = a.title.toUpperCase(); //method returns the calling string value converted to uppercase
        const bTitle = b.title.toUpperCase(); //method returns the calling string value converted to uppercase
        if (aTitle < bTitle) {
          return -1;
        } else if (aTitle > bTitle) {
          return 1;
        } else return 0;
      });

    const messageInput = [ //our placeholder for searchbar
      "Search all across 6lack",
      "Find you collaboration",
      "The world is yours, find it",
      'Find your team'

    ];

    const randomNum = (max) => {
      return Math.floor(Math.random() * max + 1); //random placeholder
    };

    this.placeholderText =
      messageInput[randomNum(messageInput.length - 1)]; //random placeholder each time
  }

  handleInput(type) { //handle input, check this
    return (event) => {
      this.setState({
        [type]: event.target.value,
      });
    };
  }

  displayTitle(title) {
    const channelDisplayTitleArray = title.split(", ");
    const currentUserRemoved = channelDisplayTitleArray.filter(
      (user) => user !== this.props.currentUserEmail //add currentUserEmail to container
    );
    return currentUserRemoved.join(", ");
  }

  render() {
    const Result = (
      <>
        <div id="search-filler">Results:</div>
        <ul>
          {this.filteredChannelsArray.map((channel) => {
            let prefix;

            if (channel.channel_or_dm === "channel") {
              if (channel.channel_type === "public") {
                prefix = "#";
              } else prefix = <i className="fas fa-lock"></i>;
            } else prefix = "#";

            if (
              this.displayTitle(channel.title).toLowerCase().startsWith(this.state.searchValue.toLowerCase()) &&
              this.state.searchValue != ""
            ) {
              return (
                <Link
                  onClick={() => this.props.closeModal()}
                  className="search-li"
                  to={`/channels/${channel.id}`}
                >
                  {prefix}
                  {this.displayTitle(channel.title)}
                  <br></br>
                </Link>
              );
            } else return null;
          })}
        </ul>
      </>
    );
    const noResult = <div id="search-filler">Narrow your search</div>;

    return (
      <>
        <form id="search-form" onSubmit={() => event.preventDefault()}> 
          <i className="fas fa-search gray"></i>
          <input
            id="search-input"
            placeholder={this.placeholderText}
            type="text"
            autoComplete="off"
            onChange={this.handleInput("searchValue")}
          ></input>
          <a
            className="search-modal-closer"
            onClick={() => this.props.closeModal()}
          >
            &times;
          </a>
        </form>

        {this.state.searchValue ? Result : noResult}
      </>
    );
  }
}
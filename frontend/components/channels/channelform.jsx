import React from "react";

class roomForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.room;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .processForm(this.state)
      .then((action) =>
        this.props.history.push(`/rooms/${action.room.id}`)
      );
    this.props.closeModal();
  }

  handleChange(type) {
    if (type === "private") {
      if (this.state.private === false) {
        return (e) => {
          this.setState({ private: true });
        };
      } else {
        return (e) => {
          this.setState({ private: false });
        };
      }
    } else {
      return (e) => {
        this.setState({ [type]: e.currentTarget.value });
      };
    }
  }

  render() {
    let checked;
    if (this.state.private === true) {
      checked = "checked";
    } else {
      checked = "";
    }
    return (
      <div className="room-form">
        <h1>Create a room</h1>
        <p>
          rooms are where your team communicates. They're best when organized
          around a topic - #collabs, for example.
        </p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              className="room-form-name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange("name")}
              placeholder="# e.g. roc-a-fella-meeting"
            />
          </label>
          <label>
            Description <span>(optional)</span>
            <textarea
              value={this.state.details}
              onChange={this.handleChange("details")}
            />
          </label>
          <span className="q">What's this room about?</span>
          <div className="private">
            <label>
              <b>Make private</b>
              <p>
                When a room is set to private, it can only be viewed or
                joined by invitation.
              </p>
            </label>
            <label className="switch">
              <input
                type="checkbox"
                checked={this.state.private}
                onClick={this.handleChange("private")}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="room-form-options">
            <span>ⓘ &nbsp; Learn More</span>
            <button>Create</button>
          </div>
        </form>
      </div>
    );
  }
}

export default roomForm;

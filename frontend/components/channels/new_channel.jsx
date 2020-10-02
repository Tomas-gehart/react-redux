import React from 'react';

class ChannelForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.channel
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(type) {
        if (type === "private") {
            if (this.state.private === false) {
                return (e) => {
                    this.setState({ private: true })
                }
            } else {
                return (e) => {
                    this.setState({ private: false })
                }
            }
        }
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state).then(action =>
            this.props.history.push(`/channels/${action.channel.id}`));
    }


    render() {
        let checked;
        if (this.state.private === true) {
            checked = "checked";
        } else {
            checked = "";
        }
        return (
            <div className="channel-create">
                <h1 className="create">
                    Create a channel
                </h1>
                <p>Channels are where your label/team communicates. They're best when
                organized around a topic - #mastering, for example.
        </p>
                <form onSubmit={this.handleSubmit}>
                    <label>Name
            <input className="channel-create-name"
                            type="text"
                            value={this.state.name}
                            onChange={this.handleChange("name")}
                            placeholder="# e.g. roc-a-fella-team"
                        />
                    </label>
                    <label>Description 
            <input className="channel-des-name"
                            type="text"
                            value={this.state.name}
                            onChange={this.handleChange("name")}
                            placeholder="working with recording artists and producers."
                        />
                    </label>
                    <div className="q">What's this collaboration about?</div>
                    <div className="private">
  
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={this.state.private}
                                onClick={this.handleChange("private")}
                            />
                            <span className="slider round"></span>
                        </label>
                    </div>
  
                </form>
            </div>
        );
    }
}

export default ChannelForm;
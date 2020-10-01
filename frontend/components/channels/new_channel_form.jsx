
import React from 'react';
import { connect } from 'react-redux';
import { createChannel } from '../../actions/channel_action';

class ChannelForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.createChannel(this.state).then(() => {
            return this.props.history.push('/channels');
        });
    };

    render() {
        return (
            <div className="channel--form-container">
                <form className="channel-create"
                    onSubmit={this.handleSubmit}>
                    <h2 className="channel-create-title">
                        Start a new channel
                    </h2>
                    <label>Name:
                        <input required
                            type="text"
                            className="name-input"
                            value={this.state.name}
                            onChange={this.update('name')}
                            placeholder="Channel Name" />
                    </label>
                    <label>Description:
                        <textarea type="text"
                            className="description-input"
                            value={this.state.description}
                            onChange={this.update('description')}
                            placeholder="Channel Description" />
                    </label>
                    <input type="submit"
                        className="create-submit"
                        value="Create Channel" />
                </form>
            </div>

        )
    }
}

export default ChannelForm;


import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';
import Channel from './channel';

const msp = (state, ownProps) => {
    return {
        users: state.entities.users,
        channel: state.entities.channels[ownProps.match.params.channelId],
        currentUser: state.entities.users[state.session.id],
        messages: Object.values(state.entities.messages)
    }
};

const mdp = dispatch => ({
    deleteChannel: channelId => dispatch(deleteChannel(channelId)),
    fetchChannel: channelId => dispatch(fetchChannel(channelId)),
    fetchUser: id => dispatch(fetchUser(id)),
    receiveMessage: message => (dispatch(receiveMessage(message))
});

export default withRouter(connect(msp, mdp)(Channel));
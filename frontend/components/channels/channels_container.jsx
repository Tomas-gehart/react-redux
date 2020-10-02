import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';
import { fetchChannels, fetchChannel, deleteChannel, createChannel} from "../../actions/channel_action";
import Channel from './channel';

const msp = (state, ownProps) => {
    return {
        users: state.entities.users,
        channel: state.entities.channels[ownProps.match.params.channelId],
        currentUser: state.entities.users[state.session.id],
    }
};

const mdp = dispatch => ({
    deleteChannel: channelId => dispatch(deleteChannel(channelId)),
    fetchChannel: channelId => dispatch(fetchChannel(channelId)),
    fetchUser: id => dispatch(fetchUser(id)),
    fetchChannels: () => dispatch(fetchChannels()),
    createChannel: channel => dispatch(createChannel(channel))

});

export default withRouter(connect(msp, mdp)(Channel));
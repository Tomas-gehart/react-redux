import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import {  fetchChannels,  createChannel,} from "../../actions/channel_actions";
import { fetchUserChannels } from "../../actions/userChannel_actions";
import { withRouter } from "react-router-dom";
import { openModal } from "../../actions/modal_actions";

const msp = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => logout()(dispatch),
    fetchChannels: () => dispatch(fetchChannels()),
    createChannel: (channel) => dispatch(createChannel(channel)),
    fetchUserChannels: () => dispatch(fetchUserChannels()),
    openModal: (modal) => dispatch(openModal(modal)),
  };
};

export default withRouter(connect(msp, mdp)(ChannelList));

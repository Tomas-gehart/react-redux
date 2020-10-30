import { connect } from "react-redux";
import ChannelHeader from "./channel_header";
import { withRouter } from "react-router-dom";
import { fetchChannel } from "../../actions/channel_action";
import { fetchUsers } from "../../actions/user_action";


const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    channel: state.entities.channels[ownProps.match.params.channelId],
  };
};

const mdp = (dispatch) => {
  return {
    fetchChannel: (id) => dispatch(fetchChannel(id)),
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default withRouter(connect(msp, mdp)(ChannelHeader));

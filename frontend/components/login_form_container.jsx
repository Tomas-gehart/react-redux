import { connect } from 'react-redux';
import { logout } from '../actions/session_action';
import SessionForm from './session_form';

const mstp = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
});

const mdtp = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mstp, mdtp)(SessionForm);

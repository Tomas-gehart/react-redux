import { connect } from 'react-redux';
import { logout } from './actions/session_actions';
import Login from './login';

const mstp = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
});

const mdtp = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mstp, mdtp)(Login);

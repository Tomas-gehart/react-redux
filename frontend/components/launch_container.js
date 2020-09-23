import { connect } from 'react-redux';
import { logout } from '../actions/session_action';
import Launch from './launch';


const mstp = ({ session, entities: { users } }) => 
    {return {currentUser: users[session.id]};
};

const mdtp = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mstp,mdtp)(Launch);
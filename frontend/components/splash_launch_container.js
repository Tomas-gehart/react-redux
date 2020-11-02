import { connect } from 'react-redux';
import { login, logout } from '../actions/session_action';
import SplashHeader from './splash_header';


const mstp = (state) => {
    if (state.session.id){
        return {currentUser: state.entities.users[state.session.id]} 
    } else {
        return {currentUser: {}}
    }
};

const mdtp = dispatch => ({
    logout: () => dispatch(logout()),
    processForm: (user) => dispatch(login(user))
});

export default connect(mstp,mdtp)(SplashHeader);
import { connect } from 'react-redux';
import { logout } from '../actions/session_action';
import SplashHeader from './splash_header';


const mstp = (state) => {
    console.log(state)
    if (state.session.id){
        return {currentUser: state.entities.users[state.session.id]} 
    } else {
        return {currentUser: {}}
    }
};

const mdtp = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mstp,mdtp)(SplashHeader);
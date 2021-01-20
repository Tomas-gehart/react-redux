import { connect } from 'react-redux';
import Searchbar from './searchbar';
import { openModal, closeModal } from '../actions/modal_actions'; //rework this

//https://www.freecodecamp.org/news/how-to-simplify-state-in-your-react-app-redux-with-a-twist-41b0e5b12dcb/#:~:text=Store%3A%20This%20is%20the%20single,change%20in%20the%20app%20state.
const msp = state => {
    return {
        users: state.entities.users, 
        currentUser: state.session.user,
        channels: state.entities.channels,
        messages: state.entities.messages,
        //currentUserEmail: state.entities.users[state.session.user.id].email
    }
}

const mdp = dispatch => {
    
    return{
        openModal: () => dispatch(openModal()),
        closeModal: () => dispatch(closeModal())
    }

}

export default connect(msp,mdp)(Searchbar);

//no openmodal, closedmodal does not even show up
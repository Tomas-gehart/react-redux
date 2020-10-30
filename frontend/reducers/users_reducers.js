import { RECEIVE_CURRENT_USER } from '../actions/session_action';


const UsersReducer = (state = {}, action) => {
    Object.freeze(state);
    //let newState = Object.assign({}, state);
    let newState = {}
    switch (action.type) {
        case RECEIVE_CURRENT_USER:

            return Object.assign({}, state, { [action.user.id]: action.user })
        default:
            return state;
    }
}

export default UsersReducer; 
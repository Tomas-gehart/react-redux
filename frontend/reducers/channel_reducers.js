import { RECEIVE_roomS, RECEIVE_room, REMOVE_room} from "../actions/room_action";

const roomReducer = (prevState = {}, action) => {
    Object.freeze(prevState);
    const nextState = Object.assign({}, prevState)

    switch (action.type) {
        case RECEIVE_roomS:
            return Object.assign(action.rooms, nextState);
        case RECEIVE_room:
             nextState[action.room.id] = action.room;
             return nextState;
        case REMOVE_room:
            delete nextState[action.room.id];
            return nextState;

        default:
            return state;
    }
}

export default roomReducer;
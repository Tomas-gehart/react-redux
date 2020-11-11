export const RECEIVE_USER_roomS = 'RECEIVE_USER_roomS';
export const RECEIVE_USER_room = 'RECEIVE_USER_room';
import * as userroomAPI from '../util/userroom_api_util';

export const receiveUserrooms = (user_rooms) => {
    return {
        type: RECEIVE_USER_roomS,
        user_rooms
    };
};

export const receiveUserroom = (payload) => {
    return {
        type: RECEIVE_USER_room,
        payload
    };
};

export const fetchUserrooms = () => (dispatch) => {
    return userroomAPI.fetchUserrooms().then(res => dispatch(receiveUserrooms(res)));
};

export const createUserroom = (userroom) => (dispatch) => {
    return userroomAPI.createUserroom(userroom).then(res => dispatch(receiveUserroom(res)));
};
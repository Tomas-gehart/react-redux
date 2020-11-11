export const RECEIVE_roomS = "RECEIVE_roomS";
export const RECEIVE_room = "RECEIVE_room";
import * as roomAPI from "../util/room_api_util";

export const receiverooms = (rooms) => {
  return {
    type: RECEIVE_roomS,
    rooms,
  };
};

export const receiveroom = (payload) => ({
  type: RECEIVE_room,
  payload,
});

export const fetchrooms = () => (dispatch) => {
  return roomAPI
    .fetchrooms()
    .then((res) => dispatch(receiverooms(res)));
};

export const fetchroom = (id) => (dispatch) => {
  return roomAPI
    .fetchroom(id)
    .then((res) => dispatch(receiveroom(res)));
};

export const createroom = (room) => (dispatch) => {
  return roomAPI
    .createroom(room)
    .then((res) => dispatch(receiveroom(res)));
};

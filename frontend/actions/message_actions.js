import * as MessageAPIUtil from "../util/message_api_util";

export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const RECEIVE_ALL_MESSAGES = "RECEIVE_ALL_MESSAGES";



export const receieveAllMessages = messages => {
    return { 
        type: RECEIVE_ALL_MESSAGES,
        messages
    }
}

export const receieveMessage = message => {
    return {
        type: RECEIVE_MESSAGE,
        message
    }
}

export const newMessage = message => dispatch => (
    APIUTIL.newMessage(message).then(
        message => (dispatch(receieveAllMessages(message))
    ))
);
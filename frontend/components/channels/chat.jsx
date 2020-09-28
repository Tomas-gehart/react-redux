import React from "react";
import {useParams} from "react-router-dom";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

function Chat(){
    const{ channelId } = useParams();

    
    return(
        <div className= "chat">
            <h2> You are in the {channelId} room</h2>
            <div className="chat__header">
                <div className="chat_left">
                    <h4 className="channel_name">
                        <strong>#general</strong>
                    </h4>

                </div>
                <div className="chat_right">
                    <p>
                        <InfoOutlinedIcon/>Details
                    </p>
                    

                </div>
            </div>
        </div>
    );
}

export default Chat;
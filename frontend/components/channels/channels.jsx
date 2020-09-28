import React from "react";
import Channel_Header from "./channel_header";
import Sidebar from "./sidebar";


function Channel(){
    return(
        <div className="channel">
            <h1>Hello</h1>
            <Channel_Header/>
            <div className="channel_body">
                <Sidebar/>
            </div>
        </div>

    )
}
export default Channel;
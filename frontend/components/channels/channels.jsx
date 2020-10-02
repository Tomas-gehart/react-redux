import React from "react";
import Channel_Header from "./channel_header";
import Sidebar from "./sidebar";
import { Route, Switch } from 'react-router-dom';
import Chat from './chat';

function Channel() {
    return (
        <div className="channel">
            <Channel_Header />
            <div className="channel_body">
                <Sidebar />
                <Switch>
                    <Route path="/channels/:channelId">
                        <Chat/>
                    </Route>
                </Switch>
            </div>
        </div>

    )
}
export default Channel

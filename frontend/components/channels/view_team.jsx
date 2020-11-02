import React from "react";
import Channels from "../channels/channels";
import Teams from "../channels/teams";
import Header from "../channels/header";
import Messages from "../channels/messages";
import SendMessage from "../channels/sendmessage";
import AppLayout from "../channels/appLayout";

export default () => (
  <AppLayout>
    <Teams
      teams={[
        { id: 1, letter: "R" },
        { id: 2, letter: "S" },
      ]}
    />
    <Channels
      teamName="Team Name"
      username="Username"
      channels={[
        { id: 1, name: "general" },
        { id: 2, name: "roc-a-fella-news" },
      ]}
      users={[
        { id: 1, name: "hovbot" },
        { id: 2, name: "rav" },
      ]}
    />
    <Header channelName="general" />e
    <Messages>
      <ul className="message-list">
        <li />
        <li />
      </ul>
    </Messages>
    <SendMessage channelName="general" />
  </AppLayout>
);
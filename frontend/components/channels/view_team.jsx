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
        { id: 1, letter: "B" },
        { id: 2, letter: "Q" },
      ]}
    />
    <Channels
      teamName="Team name"
      username="Username"
      channels={[
        { id: 1, name: "general" },
        { id: 2, name: "random" },
      ]}
      users={[
        { id: 1, name: "slackbot" },
        { id: 2, name: "ravneetsingh" },
      ]}
    />
    <Header channelName="general" />
    <Messages>
      <ul className="message-list">
        <li />
        <li />
      </ul>
    </Messages>
    <SendMessage channelName="general" />
  </AppLayout>
);
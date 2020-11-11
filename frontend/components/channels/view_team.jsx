import React from "react";
import Teams from "../channels/teams";
import Header from "../channels/header";
import Messages from "../channels/messages";
import SendMessage from "../channels/sendmessage";
import AppLayout from "../channels/applayout";

export default () => (
  <AppLayout>
    <Teams
      teams={[
        { id: 1, letter: "R" },
        { id: 2, letter: "S" },
      ]}
    />
    <rooms
      teamName="Team Name"
      username="Username"
      rooms={[
        { id: 1, name: "general" },
        { id: 2, name: "random" },
      ]}
      users={[
        { id: 1, name: "slackbot" },
        { id: 2, name: "ravneetsingh" },
      ]}
    />
    <Header roomName="general" />
    <Messages>
      <ul className="message-list">
        <li />
        <li />
      </ul>
    </Messages>
    <SendMessage roomName="general" />
  </AppLayout>
);
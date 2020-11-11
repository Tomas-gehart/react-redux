import React from "react";
import rooms from "../rooms/rooms";
import Teams from "../rooms/teams";
import Header from "../rooms/header";
import Messages from "../rooms/messages";
import SendMessage from "../rooms/sendmessage";
import AppLayout from "../rooms/applayout";

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
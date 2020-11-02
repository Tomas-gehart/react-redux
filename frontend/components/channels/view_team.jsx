import React from "react";
import Channels from "../channels/channels";
import Teams from "../channels/teams";
import Header from "../channels/header";
import Messages from "../channels/messages";
import Input from "../channels/input";
import AppLayout from "../channels/appLayout";

export default () => (
  <AppLayout>
    <Teams>Teams</Teams>
    <Channels>Channels</Channels>
    <Header>Header</Header>
    <Messages>
      <ul className="message-list">
        <li />
        <li />
      </ul>
    </Messages>
    <Input>
      <input type="text" placeholder="CSS Grid Layout Module" />
    </Input>
  </AppLayout>
);

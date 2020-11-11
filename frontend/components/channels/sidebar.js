import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import findIndex from "lodash/findIndex";
import decode from "jwt-decode";

import rooms from "../rooms/rooms";
import Teams from "../rooms/teams";

const Sidebar = ({ data: { loading, allTeams }, currentTeamId }) => {
  if (loading) {
    return null;
  }

  const teamIdx = currentTeamId
    ? findIndex(allTeams, ["id", parseInt(currentTeamId, 10)])
    : 0;
  const team = allTeams[teamIdx];
  let username = "";
  try {
    const token = localStorage.getItem("token");
    const { user } = decode(token);
    username = user.username;
  } catch (err) {}

  return [
    <Teams
      key="team-sidebar"
      teams={allTeams.map((t) => ({
        id: t.id,
        letter: t.name.charAt(0).toUpperCase(),
      }))}
    />,
    <rooms
      key="rooms-sidebar"
      teamName={team.name}
      username={username}
      rooms={team.rooms}
      users={[
        { id: 1, name: "slackbot" },
        { id: 2, name: "user1" },
      ]}
    />,
  ];
};

const allTeamsQuery = gql`
  {
    allTeams {
      id
      name
      rooms {
        id
        name
      }
    }
  }
`;

export default graphql(allTeamsQuery)(Sidebar);

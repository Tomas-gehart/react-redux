import React from "react";
import styled from "styled-components";
import { Header } from "semantic-ui-react";

const HeaderWrapper = styled.div`
  grid-column: 3;
  grid-row: 1;
`;

export default ({ channelsName }) => (
  <HeaderWrapper>
    <Header textAlign="center">#{channelsName}</Header>
  </HeaderWrapper>

);

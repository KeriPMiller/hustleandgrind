import React, { Component } from "react";
import logo from "../assets/logo.svg";
import styled from "react-emotion";
import {Greeting, CenterDiv} from "../assets/styledComponents/";
// styled components

const Logo = styled("img")`
  height: 80px;
`;

const Header = styled("div")`
  background-color: rgb(81, 37, 22);
  padding: 20px;
  color: papayawhip;
`;

const Title = styled("h1")`
  color: hotpink;
  font-size: 1.5em;
`;

class App extends Component {
  render() {
    return (
      <CenterDiv>
        <Header>
          <Logo src={logo} alt="logo" />
          <Title>Hustle & Grind</Title>
        </Header>
        <Greeting>Hello World!</Greeting>
        <p>An easier way to schedule coffee chats!</p>
      </CenterDiv>
    );
  }
}

export default App;

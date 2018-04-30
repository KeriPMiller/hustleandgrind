import React, { Component } from "react";
import logo from "../assets/logo.svg";
import styled from "react-emotion";

// styled components
const AppDiv = styled("div")`
  text-align: center;
`;
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
      <AppDiv>
        <Header>
          <Logo src={logo} alt="logo" />
          <Title>Hustle & Grind</Title>
        </Header>
        <p>An easier way to schedule coffee chats!</p>
      </AppDiv>
    );
  }
}

export default App;

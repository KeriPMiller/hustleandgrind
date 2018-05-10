import React, { Component } from "react";
import logo from "../assets/logo.svg";
import styled from "react-emotion";

// imported Components
import Calendar from "./Calendar";
// imported styled components
import { H1, CenterDiv } from "../assets/styledComponents/";

// styled components

const Logo = styled("img")`
  height: 80px;
`;

const Head = styled("div")`
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
        <Head>
          <Logo src={logo} alt="logo" />
          <Title>Hustle & Grind</Title>
        </Head>
        <H1>Hello World!</H1>
        <p>An easier way to schedule coffee chats!</p>
        <Calendar />
      </CenterDiv>
    );
  }
}

export default App;

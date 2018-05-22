import React, { Component } from "react";
import { FlexDiv } from "../assets/styledComponents";
import Calendar from "./Calendar";
import TimeSelect from "./TimeSelect";

class ProfileConsole extends Component {
  render() {
    return (
      <FlexDiv>
        <Calendar/>
        <TimeSelect/>
      </FlexDiv>
    );
  }
}

export default ProfileConsole;
import React, { Component } from "react";
import { FlexDiv } from "../assets/styledComponents";
import Calendar from "./Calendar";
import TimeSelect from "./TimeSelect";


/*this component will take the :username
* and look up available days and times for that user
* */
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
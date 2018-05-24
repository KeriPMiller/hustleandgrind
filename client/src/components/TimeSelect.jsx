import React from "react";
import TimeSlot from "./TimeSlot";
import { CenterDiv } from "../assets/styledComponents";
import { css } from "emotion";

/* this component will pass times from user availability
*   and map time slots  for each prop.
* */
const TimeSelect = () => {
  const timesArr = ["11:30 am", "1:00 pm", "2:30 pm"];
  return (
    <CenterDiv className={css`
            width: 15rem;
            margin: .5rem;
            height: 15rem;
            background-color: #6b3e2a;
            `}>
      {timesArr.map(t => <TimeSlot time={t}/>)}
    </CenterDiv>
  );
};

export default TimeSelect;
import React from "react";
import TimeSlot from "./TimeSlot";
import {CenterDiv} from "../assets/styledComponents";
import {css} from "emotion";

const TimeSelect = () => {
    return(
        <CenterDiv className={css`
            width: 15rem;
            margin: .5rem;
            height: 15rem;
            background-color: #6b3e2a;
            `}>
            <TimeSlot/>
            <TimeSlot/>
            <TimeSlot/>
        </CenterDiv>
    )
}

export default TimeSelect;
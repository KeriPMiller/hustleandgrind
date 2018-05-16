import React from "react";
import {css} from "emotion";
import {Span} from "../assets/styledComponents";

const TimeSlot = () => {
    return (
        <div className={css`
            background-color: #a57147;
            width:100%;
            margin: .2rem;
            padding: .3rem;
            text-align:center;`}>
            <Span color='BurlyWood'> 12:PM</Span>
        </div>
    )
}

export default TimeSlot;
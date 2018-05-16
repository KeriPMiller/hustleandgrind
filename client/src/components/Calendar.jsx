import React, {Component} from "react";
import moment from "moment";
import DayPicker from "react-day-picker";
import "../assets/styles/Calendar.css";
import {H1, CenterDiv, Span} from "../assets/styledComponents";


let today = moment().format("MMM  Do, YYYY");

const weekends = {
    disabled: {daysOfWeek: [0, 6]},
};

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDay: undefined
        };
        this.handleDayClick = this.handleDayClick.bind(this);
    }

    handleDayClick(day, {selected}) {
        if (selected) {
            this.setState({selectedDay: undefined});
            return;
        }
        this.setState({selectedDay: day});
    }

    render() {
        return (
            <CenterDiv>
                <H1>
                    Today is <Span color={"lawngreen"}>{today}</Span>
                </H1>
                <DayPicker
                    onDayClick={this.handleDayClick}
                    selectedDays={this.state.selectedDay}
                    modifiers={weekends}
                />
                {this.state.selectedDay ? (
                    <p>
                        You Selected {this.state.selectedDay.toLocaleDateString()}{" "}
                        {moment(
                            this.state.selectedDay.toISOString(),
                            "YYYY-MM-DD"
                        ).fromNow()}{" "}
                        from now.
                    </p>
                ) : (
                    <p>Select a day to chat</p>
                )}
            </CenterDiv>
        );
    }
}

export default Calendar;

import React, { Component } from "react";
import moment from "moment";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import { H1, Span } from "../assets/styledComponents";

let today = moment().format("MMM  Do, YYYY");

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: undefined
    };
    this.handleDayClick = this.handleDayClick.bind(this);
  }

  handleDayClick(day, { selected }) {
    if (selected) {
      this.setState({ selectedDay: undefined });
      return;
    }
    this.setState({ selectedDay: day });
  }

  render() {
    return (
      <div>
        <H1>
          Today is <Span color={"lawngreen"}>{today}</Span>
        </H1>
        <DayPicker
          onDayClick={this.handleDayClick}
          selectedDays={this.state.selectedDay}
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
      </div>
    );
  }
}

export default Calendar;

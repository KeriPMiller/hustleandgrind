import React from "react";
import moment from "moment";
import ReactTimeslotCalendar from "react-timeslot-calendar";

/* timeslot docs:
*https://www.npmjs.com/package/react-timeslot-calendar
*/

const Calendar = () => {
  let ignoreWeekends = {
    "saturdays": false,
    "sundays": false
  };
  return (
    <div>
      <ReactTimeslotCalendar
        initialDate={moment().format()}
        renderDays= {ignoreWeekends}
      />
    </div>
  );
};

export default Calendar;

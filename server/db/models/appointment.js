const { STRING, DATEONLY, DATE } = require("sequelize");
const db = require("../db");

const Appointment = db.define("appointment", {
  date: {
    type: DATEONLY,
    allowNull: false
  },
  startTime: {
    type: DATE(6),
    allowNull: false
  },
  endTime: {
    type: DATE(6),
    allowNull: false
  },
  attendee: {
    type: STRING,
    allowNull: false
  },
  email: {
    type: STRING,
    allowNull: false,
    isEmail: true
  }
});

module.exports = Appointment;

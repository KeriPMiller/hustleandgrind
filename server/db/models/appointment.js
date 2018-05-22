const { STRING, DATEONLY, DATE } = require("sequelize");
const db = require("../db");

const Appointment = db.define("appointment", {
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

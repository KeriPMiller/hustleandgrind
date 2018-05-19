const { DATE, DATEONLY } = require("sequelize");
const db = require("../db");

const Schedule = db.define("schedule", {
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
  }
});

module.exports = Schedule;

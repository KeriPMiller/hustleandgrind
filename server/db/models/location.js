const { STRING } = require("sequelize");
const db = require("../db");

const Location = db.define("location", {
  name: {
    type: STRING,
    allowNull: false
  },
  address: {
    type: STRING,
    allowNull: false
  },
  zipcode: {
    type: STRING,
    allowNull: false
  }
});

module.exports = Location;

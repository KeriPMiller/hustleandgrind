const User = require('./user');
const Appointment = require('./appointment');
const Location = require('./location');
const Schedule = require('./schedule');

Appointment.belongsTo(User);
User.hasMany(Appointment);
Schedule.belongsTo(User);
Location.belongsTo(Appointment);
Appointment.hasOne(Location);
Location.belongsTo(Schedule);

module.exports = {
  User,
  Appointment,
  Appointment: Location,
  Schedule
};
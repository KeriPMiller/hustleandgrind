const User = require("./user");
const Appointment = require("./appointment");
const Location = require("./location");
const Schedule = require("./schedule");

Appointment.belongsTo(User, {
  foreignKey: "userId",
  targetKey: "id",
  constraints: false,
  as: "user",
  onDelete:"cascade"
});
//places UserId on Appointments
//Allows Appointment.getUser/setUser/removeUser

Schedule.belongsTo(User, {
  foreignKey: "userId",
  targetKey: "id",
  constraints: false,
  as: "user"
});
//places UserId on Schedules
//Allows Schedule.getUser/setUser/removeUser

Location.hasMany(Schedule, {
  foreignKey: "locationId",
  sourceKey: "id",
  constraints: false,
  as: "location"
});
// Places locationId on Schedule rows

Appointment.belongsTo(Schedule, {
  foreignKey: "scheduleId",
  targetKey: "id",
  constraints: false,
  as: "details"
});
//places scheduleId on Appointment

Schedule.hasOne(Appointment, {
  foreignKey: "scheduleId",
  sourceKey: "id",
  constraints: false,
  as: "details"
});

module.exports = {
  User,
  Appointment,
  Location,
  Schedule
};
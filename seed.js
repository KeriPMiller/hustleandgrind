const db = require("./server/db/");
const { User, Location, Appointment, Schedule } = require("./server/db/models");
const moment = require("moment");

const dateFormat = "YYYY-M-D H:m";

const start1 = moment("2018-04-21 09:30", dateFormat);
const end1 = moment("2018-04-21 10:30", dateFormat);

const start2 = moment("2018-7-24 10:15", dateFormat);
const end2 = moment("2018-7-24 11:15", dateFormat);

const start3 = moment("2018-07-24 13:30", dateFormat);
const end3 = moment("2018-07-24 14:30", dateFormat);


// Seed Users
const users = [{
  "email": "tossedSaladAndScrambledEggs@aol.com",
  "username": "ImListening",
  "password": "frasier"
}, {
  "email": "martycrane@hotmail.com",
  "username": "RDWRWR",
  "password": "eddie"
}, {
  "email": "pyschicMoonie@hotmail.com",
  "username": "MoonDance",
  "password": "manchester"
}, {
  "email": "corkmaster1999@yahoo.com",
  "username": "nCrane",
  "password": "daphne"
}];

// Seed Locations
const coffeeShops = [{
  "name": "Cafè Nervosa",
  "address": "9910 8th Ave SW",
  "city": "Seattle",
  "state": "WA",
  "zipcode": 98106
}, {
  "name": "Sound and Fog",
  "address": "4735 40th Ave SW",
  "city": "Seattle",
  "state": "WA",
  "zipcode": 98116
}, {
  "name": "Caffè Umbria",
  "address": "320 Occidental Ave S",
  "city": "Seattle",
  "state": "WA",
  "zipcode": 98104
}];

// Seed Schedules
const availability = [{
  "date": "2018-04-21",
  "startTime": start1,
  "endTime": end1,
  "userId": 2,
  "locationId": 1
}, {
  "date": "2018-07-24",
  "startTime": start2,
  "endTime": end2,
  "userId": 1,
  "locationId": 3
}, {
  "date": "2018-07-24",
  "startTime": start3,
  "endTime": end3,
  "userId": 1,
  "locationId": 1
}];

// Seed Appointments
const appointments = [{
  "scheduleId": "2",
  "userId": "2",
  "attendee": "Roz",
  "email": "LadyO@gmail.com"
}];

// RUN SEED
const seed = () =>
  Promise.all([
    users.map(user => User.create(user)),
    coffeeShops.map(cafe => Location.create(cafe))
  ]).catch(err => console.log(err));

const seedTime = () =>
  Promise.all([
    availability.map(time => Schedule.create(time)),
    appointments.map(app => Appointment.create(app))
  ]).catch(err => console.log(err));


const main = () => {
  console.log("Synching db...");

  db.sync({ force: true })
    .then(() => {
      console.log("Seeding the DB...");
      return seed();
    })
    .catch(err => console.log(err.stack))
    .then(() => {
      console.log("adding appointments...");
      return seedTime();
    })
    .catch(err => console.log(err.stack))
    .then(() => {
      console.log("Done!");
      db.close();
    });
};

main();
const router = require("express").Router();
const { Schedule } = require("../db/models");
module.exports = router;

// GET all schedules
router.get("/", (req, res, next) => {
  Schedule.findAll()
    .then(schedules => res.json(schedules))
    .catch(next);
});

// GET schedule by id
router.get("/:scheduleId", (req, res, next) => {
  Schedule.findById(+req.params.scheduleId)
    .then(schedule => res.json(schedule))
    .catch(next);
});

// POST a schedule
router.post("/", (req, res) => {
  Schedule.create(req.body)
    .then(newSchedule => res.status(201).json(newSchedule))
    .catch(err => console.error(err));
});

// PUT schedule
router.put("/:scheduleId", (req, res, next) => {
  Schedule.findById(+req.params.scheduleId)
    .then(schedule => schedule.update(req.body))
    .then(res.sendStatus(202))
    .catch(next);
});

// DELETE schedule
router.delete("/:scheduleId", (req, res, next) => {
  Schedule.destroy({
    where: {
      id: {
        id: req.params.scheduleId
      }
    }
  })
    .then(() => res.sendStatus(204))
    .catch(next);
});

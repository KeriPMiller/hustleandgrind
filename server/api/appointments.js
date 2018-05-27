const router = require("express").Router();
const { Appointment, Schedule, User } = require("../db/models");
module.exports = router;

// GET all appointments
router.get("/", (req, res, next) => {
  Appointment.findAll({
    include:{
      model: User, as: 'user',
      attributes: ["id", "email", "username"]
    }
  })
    .then(appointment => res.json(appointment))
    .catch(next);
});

// GET appointment by id
router.get("/:appointmentId", (req, res, next) => {
  Appointment.findById(+req.params.appointmentId, {
    include: {
      model: Schedule, as: "details"
    }
  })
    .then(appointment => res.json(appointment))
    .catch(next);
});

// POST a appointment
router.post("/", (req, res) => {
  Appointment.create(req.body)
    .then(newappointment => res.status(201).json(newappointment))
    .catch(err => console.error(err));
});

// PUT appointment
router.put("/:appointmentId", (req, res, next) => {
  Appointment.findById(+req.params.appointmentId)
    .then(appointment => appointment.update(req.body))
    .then(updatedApp => res.status(202).json(updatedApp))
    .catch(next);
});

// DELETE appointment
router.delete("/:appointmentId", (req, res, next) => {
  Appointment.destroy({
    where: {
      id: {
        id: req.params.appointmentId
      }
    }
  })
    .then(() => res.sendStatus(204))
    .catch(next);
});

const router = require("express").Router();
const { Location } = require("../db/models");
module.exports = router;

// GET all locations
router.get("/", (req, res, next) => {
  Location.findAll()
    .then(locations => res.json(locations))
    .catch(next);
});

// GET location by id
router.get("/:locationId", (req, res, next) => {
  Location.findById(+req.params.locationId)
    .then(location => res.json(location))
    .catch(next);
});

// POST a location
router.post("/", (req, res) => {
  Location.create(req.body)
    .then(newLocation => res.status(201).json(newLocation))
    .catch(err => console.error(err));
});

// PUT location
router.put("/:locationId", (req, res, next) => {
  Location.findById(+req.params.locationId)
    .then(location => location.update(req.body))
    .then(updatedLoc => res.status(202).json(updatedLoc))
    .catch(next);
});

// DELETE location
router.delete("/:locationId", (req, res, next) => {
  Location.destroy({
    where: { id: +req.params.locationId }
  })
    .then(() => res.sendStatus(204))
    .catch(next);
});

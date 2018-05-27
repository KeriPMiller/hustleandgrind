const router = require("express").Router();
const { User } = require("../db/models");
module.exports = router;

// GET all users
router.get("/", (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ["id", "email", "username"]
  })
    .then(users => res.json(users))
    .catch(next);
});

// GET user by unique username
router.get("/:username", (req, res, next) => {
  User.findOne({
    where: {
      username: req.params.username
    },
    attributes: ["id", "email", "username"]
  })
    .then(user => res.json(user))
    .catch(next);
})
;

// PUT user
router.put("/:userId", (req, res, next) => {
  User.findById(+req.params.userId)
    .then(user => user.update(req.body))
    .then(updatedUser => res.status(202).json(updatedUser))
    .catch(next);
});

// DELETE user
router.delete("/:userId", (req, res, next) => {
  User.destroy({
    where: { id: +req.params.userId }
  })
    .then(() => res.sendStatus(204).end())
    .catch(next);
});

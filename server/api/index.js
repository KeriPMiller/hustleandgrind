const router = require("express").Router();
module.exports = router;

router.use("/users", require("./users"))
router.use("/locations", require("./locations"));
router.use("/appointments", require("./appointments"));
router.use("/schedules", require("./schedules"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
const {Router} = require("express");
const router = Router();
const coursesControllers = require("../controllers/courses.controllers");

router.get("/courses/info", coursesControllers.getInfo )

router.post("/courses", coursesControllers.create);

router.get("/courses", coursesControllers.getAll);

router.patch("/courses/:course_id", coursesControllers.update);

router.delete("/courses/:course_id", coursesControllers.delete);

module.exports = router;
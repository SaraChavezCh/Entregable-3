const usersCoursesControllers = require("../controllers/usersCourses.controllers");
const { Router } = require("express");

const router = Router();

router.post("/users/courses", usersCoursesControllers.create);

router.get("/users/courses", usersCoursesControllers.getAll);

module.exports = router;

const { Router } = require("express")
const usersControllers = require("../controllers/users.controllers");
const router = Router();


router.get("/users", usersControllers.getAll);

router.get("/users/:user_id/courses", usersControllers.getCoursesByUser)

router.get("/users/:user_id", usersControllers.getOne);

router.post("/users", usersControllers.create);

router.patch("/users/:user_id", usersControllers.updatePartial);

router.delete("/users/:user_id", usersControllers.delete );


module.exports = router;
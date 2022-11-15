const { Router } = require("express")
const videosControllers = require("../controllers/videos.controllers");
const router = Router();


router.get("/videos", videosControllers.getAll);

router.post("/videos", videosControllers.create);

router.delete("/videos/:video_id", videosControllers.delete );


module.exports = router;
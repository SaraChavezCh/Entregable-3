const Videos = require("../models/videos.models");

class videosControllers{
    static async create (req, res){
        const { title, url, courseId } = req.body;
        try {
            const video = await Videos.create({ title, url, courseId });
            res.status(201).json(video);
            
        } catch (error) {
            console.log(error)
        }
    }
    static async getAll(req, res) {
        try {
          const allVideos = await Videos.findAll();
          res.status(200).json(allVideos);
        } catch (error) {
          console.log(error);
        }
      }
      static async delete (req, res){
        const { video_id } = req.params;
        try{
            const video = await Videos.findByPk(video_id);
            if(video){
                video.destroy();
                res.sendStatus(202);
            }else{
            res.status(500).json([{message:"video not found"}])
            }
        }catch(error){
            console.log(error)
        }
      }

}

module.exports = videosControllers;
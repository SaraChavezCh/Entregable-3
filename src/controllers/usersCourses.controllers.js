const UsersCourses = require("../models/usersCourses.models");

class usersCoursesControllers{
    static async create(req,res){
        const { user_id, course_id } = req.body;
        try {
            const userCourse = await UsersCourses.create({user_id, course_id});
            res.status(201).json(userCourse);
            
        } catch (error) {
            console.log(error)
            
        }
    }
    static async getAll (req, res){
        try {
            const all = await UsersCourses.findAll();
            res.status(200).json(all)
            
        } catch (error) {
            console.log(error)
            
        }
    }

}

module.exports = usersCoursesControllers;
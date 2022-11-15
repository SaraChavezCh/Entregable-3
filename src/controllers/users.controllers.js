const Courses = require("../models/courses.models");
const Users = require("../models/users.models");

class usersControllers {
  static async create(req, res) {
    const { firstName, lastName, email, password } = req.body;
    try {
      const user = await Users.create({ firstName, lastName, email, password });
      res.status(201).json(user);
    } catch (error) {
      console.log(error);
    }
  }
  static async getAll(req, res) {
    try {
      const allUsers = await Users.findAll({
        attributes: { exclude: ["createdAt", "updatedAt", "password"] },
      });
      res.status(200).json(allUsers);
    } catch (error) {
      console.log(error);
    }
  }
  static async getOne (req, res){
    const { user_id } = req.params;
    try{
        const user = await Users.findByPk(user_id, {attributes: {
            exclude: ["createdAt", "updatedAt", "password"],
          }});
        if (user){
            res.status(200).json(user)
        }else{
            res.status(500).json([{message:"users not found"}])
        }
    }catch(error){
        res.status(500).json({error:error});
    }
  }
  static async updatePartial(req, res) {
    const { firstName, lastName, password } = req.body;
    const { user_id } = req.params;
    try {
      const user = await Users.findByPk(user_id);
      if (firstName) {
        user.firstName = firstName;
      }
      if (lastName) {
        user.lastName = lastName;
      }
      if (password) {
        user.password = password;
      }
      await user.save();
      const userUpdated = await Users.findByPk(user_id, {
        attributes: {
          exclude: ["createdAt", "updatedAt", "password"],
        },
      });
      res.status(202).json(userUpdated);
    } catch (error) {
      console.log(error);
    }
  }
  static async delete (req, res){
    const { user_id } = req.params;
    try{
        const user = await Users.findByPk(user_id);
        if(user){
            user.destroy();
            res.sendStatus(202);
        }else{
        res.status(500).json([{message:"users not found"}])
        }
    }catch(error){
        console.log(error)
    }
  }
  static async getCoursesByUser(req, res){
    const { user_id } = req.params;
    try {
      const user = await Users.findAll({
        attributes:{
          exclude:["createdAt", "updatedAt", "password"]
        }, 
        include:{
          model: Courses,
          attributes:[ "title"]
        },
        where:{user_id}
      })
      if(user && user.length > 0){
        res.status(200).json(user)
      } else{
        res.status(500).json({message:"user not found"})
      }
      
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = usersControllers;

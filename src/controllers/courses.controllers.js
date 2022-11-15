const Categories = require("../models/categories.models");
const Courses = require("../models/courses.models");
const Videos = require("../models/videos.models");

class coursesControllers {
  static async create(req, res) {
    const { title, description, instructor, categoryId } = req.body;
    try {
      const course = await Courses.create({
        title,
        description,
        instructor,
        categoryId,
      });
      res.status(201).json(course);
    } catch (error) {
      console.log(error);
    }
  }
  static async getAll(req, res) {
    try {
      const all = await Courses.findAll();
      res.status(200).json(all);
    } catch (error) {
      console.log(error);
    }
  }
  static async update(req, res) {
    const { course_id } = req.params;
    const { description } = req.body;
    try {
      const course = await Courses.findByPk(course_id);
      if (course) {
        course.description = description;
        course.save();
        res.status(202).json(course);
      } else {
        res.status(500).json({ message: "Course not found" });
      }
    } catch (error) {
      console.log(error);
    }
  }
  static async delete(req, res) {
    const { course_id } = req.params;
    try {
      const deleteCourse = await Courses.findByPk(course_id);
      if (deleteCourse) {
        deleteCourse.destroy();
        res.sendStatus(202);
      } else {
        res.status(500).json({ message: "Course not found" });
      }
    } catch (error) {
      console.log(error);
    }
  }
  static async getInfo(req, res) {
    try {
      const coursesInfo = await Courses.findAll({
         attributes: { exclude: ["createdAt", "updatedAt"] },
                include: [{
                    model: Categories,
                    attributes: ['name']
                },
                {
                    model: Videos,
                    attributes: ['title', 'url']
                }
                ]
      });
      res.status(200).json(coursesInfo);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}

module.exports = coursesControllers;

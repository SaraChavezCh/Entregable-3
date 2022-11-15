const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Courses = require("./courses.models");

const Categories = db.define('categories', {
    categoryId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        field: "category_id"
      }, 
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      }
}, {
    timestamps: false,
});

module.exports = Categories;
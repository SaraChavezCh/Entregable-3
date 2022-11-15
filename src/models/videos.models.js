const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Courses = require("./courses.models");

const Videos = db.define('videos', {
    videoId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        field: "video_id"
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "course_id",
      },
}, {
    timestamps: false,
});

module.exports = Videos;
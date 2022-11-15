const db = require("../utils/database");

const UsersCourses = db.define( 'users_courses',{}, {timestamps: false});

module.exports = UsersCourses;
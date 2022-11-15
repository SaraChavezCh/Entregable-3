const db = require("../utils/database");
const initModels = require("../models/initModels")
const { forEach } = require("p-iteration");
const Users = require("../models/users.models");
const Courses = require("../models/courses.models");
const Categories = require("../models/categories.models");
const Videos = require("../models/videos.models");
const UsersCourses = require("../models/usersCourses.models");
initModels();
const users = [
    {firstName: "Sara", lastName: "Chavez", email: "sara@gmail.com", password: "1234"},
    {firstName: "Alejandra", lastName: "Orozco", email: "ale@gmail.com", password: "12345"},
    {firstName: "Salvador", lastName: "Chavez", email: "chava@gmail.com", password: "thtgr"},
    {firstName: "Miguel", lastName: "Chavez", email: "mike@gmail.com", password: "39475"}
];
const categories = [
    {name: "CSS"},
    {name: "HTML"},
    {name: "REACT"},
    {name: "JS"},
    {name: "NODE"}
];
const courses = [
    {title: "Aprende CSS", description: "Aprende los fundamentos de CSS", instructor: "Brenda", categoryId: 1},
    {title: "React", description: "Aprende los fundamentos de REACT", instructor: "Norma Mendez", categoryId: 3},
    {title: "Node", description: "Aprende los fundamentos de Node", instructor: "Armando Morales", categoryId: 5},
    {title: "JS", description: "Aprende los fundamentos de JS", instructor: "Lucia Pereira", categoryId: 4},
    {title: "Aprende HTML", description: "Aprende los fundamentos de HTML", instructor: "Robert Perez", categoryId: 2}
];
const videos = [
    {title: "CSS", url: "urlCSS", courseId: 1},
    {title: "HTML", url: "urlhtml", courseId: 2},
    {title: "REACT", url: "urlreact", courseId: 3},
    {title: "JS", url: "urljs", courseId: 4},
    {title: "NODE", url: "urlnode", courseId: 5}
];
const usersCourses = [
    {user_id:1, course_id:5},
    {user_id:2, course_id:4},
    {user_id:3, course_id:1},
    {user_id:4, course_id:3},
    
];
async function seeding(){
    await db.sync({force: true})
    await forEach(users, (user)=> Users.create(user))
    await forEach(categories, (category)=> Categories.create(category))
    await forEach(courses, (course)=> Courses.create(course))
    await forEach(videos, (video)=> Videos.create(video))
    await forEach(usersCourses, (userCourse)=> UsersCourses.create(userCourse))
};
seeding();
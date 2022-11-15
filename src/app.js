const express = require("express");
const initModels = require("./models/initModels");
const usersRoutes = require("./routes/users.routes");
const categoriesRoutes = require("./routes/categories.routes");
const coursesRoutes = require("./routes/courses.routes");
const videosRoutes = require("./routes/videos.routes");
const usersCoursesRoutes = require("./routes/usersCourses.routes");
const db = require('./utils/database');
const app = express();
require('dotenv').config();

initModels();
app.use(express.json());

app.use("/api/v1", usersCoursesRoutes);
app.use("/api/v1", usersRoutes);
app.use("/api/v1", categoriesRoutes);
app.use("/api/v1", coursesRoutes);
app.use("/api/v1", videosRoutes);


 const PORT = process.env.PORT || 8000;

 db.authenticate()
 .then(() => console.log('AUTENTICACION EXITOSA'))
 .catch((error) => console.log(error));

 db.sync({force: false})
 .then(()=>console.log('SINCRONIZACION EXITOSA'))
 .catch((error) => console.log(error))


 app.listen(PORT, () => {
    console.log("running" + PORT);
 });
module.exports = app ; 
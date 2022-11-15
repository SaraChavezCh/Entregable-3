const db = require("../utils/database");
const { DataTypes } = require ("sequelize");

const Users = db.define('users', {
    
userId: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    field: "user_id"
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      isEmail: true,
    },
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
// },
// {
//   hooks: {
//     beforeCreate: (user, options) => {
//       const { password } = user;
//       const hash = bcrypt.hashSync(password, 8); // devuelve las contraseña en un hash (encriptada)
//       user.password = hash;
//     },
//   },
}
);


module.exports = Users;
const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");
const Users = require("./users");


const BirthSexes = sequelize.define(
  "birth_sexes",
  {
    birth_sexes_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    birth_sexes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    activate: {
      type: DataTypes.TINYINT,
      defaultValue: 1,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

// BirthSexes.findAllData = function () {
//   BirthSexes.hasMany(Users, {
//     as: "user",
//     onDelete: "CASCADE",
//     foreignKey: "users_id",
//   });
//   return Users.findAll({ include: "users" });
// };

module.exports = BirthSexes;

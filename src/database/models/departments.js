const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const Departments = sequelize.define(
  "departments",
  {
    departments_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    departments: {
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

module.exports = Departments;

const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const Districts = sequelize.define(
  "districts",
  {
    districts_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    provinces_departments_departments_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    provinces_provinces_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    districts: {
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

module.exports = Districts;

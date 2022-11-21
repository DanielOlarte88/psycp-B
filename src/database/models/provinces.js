const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const Provinces = sequelize.define(
  "provinces",
  {
    provinces_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    departments_departments_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    provinces: {
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

module.exports = Provinces;

const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const StudiesArea = sequelize.define(
  "studies_area",
  {
    studies_area_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    studies_area: {
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

module.exports = StudiesArea;

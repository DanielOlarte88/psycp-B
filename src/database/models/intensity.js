const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const Intensity = sequelize.define(
  "intensity",
  {
    intensity_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    intensity: {
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

module.exports = Intensity;

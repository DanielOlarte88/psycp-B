const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const IntervAccessibility = sequelize.define(
  "interv_accessibility",
  {
    interv_accessibility_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    interv_accessibility: {
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

module.exports = IntervAccessibility;

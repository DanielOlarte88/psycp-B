const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const PhysicalAspect = sequelize.define(
  "physical_aspect",
  {
    physical_aspect_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    actual_condition_actual_condition_id: {
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

module.exports = PhysicalAspect;

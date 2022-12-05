const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const PhysicalPsychomotricity = sequelize.define(
  "physical_psychomotricity",
  {
    physical_psychomotricity_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    physical_aspect_physical_aspect_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    motor_activity_level_description_id: {
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

module.exports = PhysicalPsychomotricity;

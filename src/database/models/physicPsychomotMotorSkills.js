const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const PhysicPsychomotMotorSkills = sequelize.define(
  "physic_psychomot_motor_skills",
  {
    physic_psychomot_motor_skills_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    motor_skills_level_description_id: {
      type: DataTypes.TINYINT,
    },
    clumsiness_int: {
      type: DataTypes.TINYINT,
    },
    slowness_int: {
      type: DataTypes.TINYINT,
    },
    looseness_int: {
      type: DataTypes.TINYINT,
    },
    physical_psychomotricity_physical_psychomotricity_id: {
      type: DataTypes.INTEGER,
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

module.exports = PhysicPsychomotMotorSkills;

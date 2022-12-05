const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const PhysicPsychomotSkillsType = sequelize.define(
  "physic_psychomot_skills_type",
  {
    physic_psychomot_skills_type_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    physic_psychomot_skills_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    physic_psychomot_motor_skills_physic_psychomot_motor_skills_id: {
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

module.exports = PhysicPsychomotSkillsType;

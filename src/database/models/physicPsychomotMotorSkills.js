const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const PhysicVestment = sequelize.define(
  "physic_psychomot_motor_skills",
  {
    physic_psychomot_motor_skills_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    level_description_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    clumsiness_int: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    slowness_int: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    looseness_int: {
      type: DataTypes.TINYINT,
      allowNull: false,
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

module.exports = PhysicVestment;

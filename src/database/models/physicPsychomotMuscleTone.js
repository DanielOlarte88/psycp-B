const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const PhysicPsychomotMuscleTone = sequelize.define(
  "physic_psychomot_muscle_tone",
  {
    physical_psychomotricity_physical_psychomotricity_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    physic_psychomot_muscle_condi_physic_psychomot_muscle_condi_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    muscle_tone_level_description_id: {
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

module.exports = PhysicPsychomotMuscleTone;

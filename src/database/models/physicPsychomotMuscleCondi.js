const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");

const PhysicPsychomotMuscleCondi = sequelize.define(
  "physic_psychomot_muscle_condi",
  {
    physic_psychomot_muscle_condi_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    muscle_tone_condition: {
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

module.exports = PhysicPsychomotMuscleCondi;

const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const PhysicPsychomotKinetCondi = sequelize.define(
  "physic_psychomot_kinet_condi",
  {
    physic_psychomot_kinet_condi_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    kinet_condi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kinet_subcondi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kinet_subcondi_specific: {
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

module.exports = PhysicPsychomotKinetCondi;

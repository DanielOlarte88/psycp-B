const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const PhysicPsychomotKinetHarmo= sequelize.define(
  "physic_psychomot_kinet_harmo",
  {
    physic_psychomot_kinet_harmo_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    kinet_harmo_agitation_porcent: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    kinet_harmo_restlessness_porcent: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    kinet_harmo_functional_porcent: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    kinet_harmo_rigidity_porcent: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    kinet_harmo_stupor_porcent: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    kinet_harmo_none: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    physical_psychomotricity_physical_psychomotricity_id: {
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

module.exports = PhysicPsychomotKinetHarmo;

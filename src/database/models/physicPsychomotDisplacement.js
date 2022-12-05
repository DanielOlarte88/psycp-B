const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const PhysicPpsychomotDisplacement = sequelize.define(
  "physic_psychomot_displacement",
  {
    physical_psychomotricity_physical_psychomotricity_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    physic_psychomot_displa_condi_physic_psychomot_displa_condi_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level_description_id: {
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

module.exports = PhysicPpsychomotDisplacement;

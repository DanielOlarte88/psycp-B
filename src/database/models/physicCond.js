const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const PhysicCond = sequelize.define(
  "physic_cond",
  {
    physic_cond_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    glasses: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hearing_aids: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    physic_cond_none: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    physical_condition_physical_condition_id: {
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

module.exports = PhysicCond;

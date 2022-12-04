const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const PhysicComplexion = sequelize.define(
  "physic_complexion",
  {
    physic_complexion_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    complexion: {
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

module.exports = PhysicComplexion;

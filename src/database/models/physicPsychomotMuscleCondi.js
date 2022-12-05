const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");

const PhysicVestment = sequelize.define(
  "physic_vestment",
  {
    physic_vestment_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    vestment: {
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

module.exports = PhysicVestment;

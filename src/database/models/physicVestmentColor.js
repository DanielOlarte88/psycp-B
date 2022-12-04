const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const PhysicVestmentColor = sequelize.define(
  "physic_vestment_color",
  {
    physic_vestment_color_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    vestment_color: {
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

module.exports = PhysicVestmentColor;

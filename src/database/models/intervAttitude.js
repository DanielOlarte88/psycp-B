const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const IntervAttitude = sequelize.define(
  "interv_attitude",
  {
    interv_attitude_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    attitude: {
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

module.exports = IntervAttitude;

const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const MaritalStatus = sequelize.define(
  "marital_status",
  {
    marital_status_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    marital_status: {
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

module.exports = MaritalStatus;

const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const HealthServices = sequelize.define(
  "health_services",
  {
    health_services_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    health_services: {
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

module.exports = HealthServices;

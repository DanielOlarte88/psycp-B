const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");
const { institutionsModel } = require("../../database/models");
const { healthServicesModel } = require("../../database/models");

const Institutions_HealthServices = sequelize.define(
  "institutions_has_health_services",
  {
    institutions_institutions_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: institutionsModel,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    health_services_health_services_id: {
      type: DataTypes.TINYINT,
      primaryKey: true,
      allowNull: false,
      references: {
        model: healthServicesModel,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
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

module.exports = Institutions_HealthServices;

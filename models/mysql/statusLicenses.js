const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const StatusLicenses = sequelize.define(
  "status_licenses",
  {
    status_licenses_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    status_licenses: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    activate:{
      type: DataTypes.TINYINT,
      defaultValue: 1,
      allowNull: false
    }
  },
  {
    timestamps: true,
  }
);

module.exports = StatusLicenses;

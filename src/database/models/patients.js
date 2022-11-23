const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const Patients = sequelize.define(
  "patients",
  {
    patients_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    patients_internal_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    users_users_id: {
      type: DataTypes.INTEGER,
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

module.exports = Patients;

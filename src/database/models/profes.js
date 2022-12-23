const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");

const Profes = sequelize.define(
  "profes",
  {
    profes_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    profes_internal_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    profes_residence_ubigeo: {
      type: DataTypes.STRING,
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

module.exports = Profes;

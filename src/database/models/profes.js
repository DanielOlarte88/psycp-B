const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");

const Profes = sequelize.define(
  "profes",
  {
    profes_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    profes_internal_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profes_residence_ubigeo: {
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

module.exports = Profes;

const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");

const ProfesTuition = sequelize.define(
  "profes_tuition",
  {
    profes_tuition_code: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    profes_tuition_surnames: {
      type: DataTypes.STRING,
    },
    profes_tuition_names: {
      type: DataTypes.STRING,
    },
    activate: {
      type: DataTypes.TINYINT,
      defaultValue: 1,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = ProfesTuition;

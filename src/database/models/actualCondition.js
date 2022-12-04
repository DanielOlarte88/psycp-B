const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const ActualCondition = sequelize.define(
  "actual_condition",
  {
    actual_condition_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    anamnesis_anamnesis_id: {
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

module.exports = ActualCondition;

const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");

const InstructionYears = sequelize.define(
  "instruction_years",
  {
    instruction_years_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    instruction_years: {
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

module.exports = InstructionYears;

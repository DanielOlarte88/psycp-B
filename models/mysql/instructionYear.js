const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const InstructionYear = sequelize.define(
  "instruction_year",
  {
    instruction_year_id: {
      type: DataTypes.TINYINT,
      primaryKey: true,
      autoIncrement: true,
    },
    instruction_year: {
      type: DataTypes.STRING,
    },
    activate:{
      type: DataTypes.TINYINT,
      defaultValue: 1,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = InstructionYear;

const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");

const InstructionLevels = sequelize.define(
  "instruction_levels",
  {
    instruction_levels_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    instruction_levels: {
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

module.exports = InstructionLevels;

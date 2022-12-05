const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const Sensory = sequelize.define(
  "sensory",
  {
    sensory_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      unique: true,
    },
    sensory_part: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    activate: {
      type: DataTypes.TINYINT,
      defaultValue: 1,
      allowNull: false,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = Sensory;

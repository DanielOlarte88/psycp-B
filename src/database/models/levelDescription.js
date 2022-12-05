const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const LevelDescription = sequelize.define(
  "level_description",
  {
    level_description_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    level_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level_value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level_description: {
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

module.exports = LevelDescription;

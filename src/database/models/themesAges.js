const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");

const ThemesAges = sequelize.define(
  "themes_ages",
  {
    themes_ages_id: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true,
    },
    themes_ages: {
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

module.exports = ThemesAges;

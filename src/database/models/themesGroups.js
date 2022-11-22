const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");

const ThemesGroups = sequelize.define(
  "themes_groups",
  {
    themes_groups_id: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true,
    },
    themes_groups: {
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

module.exports = ThemesGroups;

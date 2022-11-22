const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");

const Themes = sequelize.define(
  "themes",
  {
    themes_id: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    themes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    themes_groups_themes_groups_id: {
      type: DataTypes.SMALLINT,
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

module.exports = Themes;

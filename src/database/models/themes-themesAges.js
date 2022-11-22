const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");
const { themesModel } = require("../../database/models/themes");
const { themesGroupsModel } = require("../../database/models/themesGroups");
const { themesAgesModel } = require("../../database/models/themesAges");

const Themes_ThemesAges = sequelize.define(
  "themes_has_themes_ages",
  {
    themes_themes_id: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      allowNull: false,
      references: {
        model: themesModel,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    themes_themes_groups_themes_groups_id: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      allowNull: false,
      references: {
        model: themesGroupsModel,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    themes_ages_themes_ages_id: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      allowNull: false,
      references: {
        model: themesAgesModel,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
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

module.exports = Themes_ThemesAges;

const { sequelize } = require("../config/mysql")
const { DataTypes } = require("sequelize");
const { profesModel } = require("../../database/models/profes");
const { themesModel } = require("../../database/models/themes");
const { themesGroupsModel } = require("../../database/models/themesGroups");
const { themesAgesModel } = require("../../database/models/themesAges");

const Profes_Thematics = sequelize.define(
  "profes_has_themes_has_themes_ages",
  {
    profes_profes_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: profesModel,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    themes_has_themes_ages_themes_themes_id: {
      type: DataTypes.TINYINT,
      primaryKey: true,
      allowNull: false,
      references: {
        model: themesModel,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    themes_has_themes_ages_themes_themes_groups_themes_groups_id: {
      type: DataTypes.TINYINT,
      primaryKey: true,
      allowNull: false,
      references: {
        model: themesGroupsModel,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    themes_has_themes_ages_themes_ages_themes_ages_id: {
      type: DataTypes.TINYINT,
      primaryKey: true,
      allowNull: false,
      references: {
        model: themesAgesModel,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    thematics_specialty_level: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    thematics_experience_level: {
      type: DataTypes.TINYINT,
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

module.exports = Profes_Thematics;

const { sequelize } = require("../config/mysql")
const { DataTypes } = require("sequelize");
const Profes = require("./profes");
const Themes = require("./themes");
const ThemesGroups = require("./themesGroups");
const ThemesAges = require("./themesAges");

const Profes_ThemesAges = sequelize.define(
  "profes_has_themes_ages",
  {
    profes_profes_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      // references: {
      //   model: profesModel,
      //   key: 'id'
      // },
      // onUpdate: 'CASCADE',
      // onDelete: 'SET NULL'
    },
    themes_themes_id: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      allowNull: false,
      // references: {
      //   model: themesModel,
      //   key: 'id'
      // },
      // onUpdate: 'CASCADE',
      // onDelete: 'SET NULL'
    },
    themes_themes_groups_themes_groups_id: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      allowNull: false,
      // references: {
      //   model: themesGroupsModel,
      //   key: 'id'
      // },
      // onUpdate: 'CASCADE',
      // onDelete: 'SET NULL'
    },
    themes_ages_themes_ages_id: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      allowNull: false,
      // references: {
      //   model: themesAgesModel,
      //   key: 'id'
      // },
      // onUpdate: 'CASCADE',
      // onDelete: 'SET NULL'
    },
    themes_specialty_level: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    themes_experience_level: {
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
  },
);

Profes_ThemesAges.findAllData = function (id) {
  Profes_ThemesAges.belongsTo(Profes, {foreignKey: "profes_profes_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  Profes_ThemesAges.belongsTo(Themes, {foreignKey: "themes_themes_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  Profes_ThemesAges.belongsTo(ThemesGroups, {foreignKey: "themes_themes_groups_themes_groups_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  Profes_ThemesAges.belongsTo(ThemesAges, {foreignKey: "themes_ages_themes_ages_id", onUpdate: "CASCADE", onDelete: "CASCADE"});

  return Profes_ThemesAges.findAll({
    where: {
      profes_profes_id: 1,
      activate: 1
    },
    include: [
      {model: Profes, attributes: ['profes_id']},
      {model: Themes, attributes: ['themes']},
      {model: ThemesGroups, attributes: ['themes_groups']},
      {model: ThemesAges, attributes: ['themes_ages']},
    ],
    attributes: [
      [sequelize.literal('`profe`.`profes_id`'), 'profes_profes_id'],
      [sequelize.literal('`theme`.`themes`'), 'themes_themes_id'],
      [sequelize.literal('`themes_group`.`themes_groups`'), 'themes_themes_groups_themes_groups_id'],
      [sequelize.literal('`themes_age`.`themes_ages`'), 'themes_ages_themes_ages_id'],
      'themes_specialty_level', 'themes_experience_level'
    ],
  })
};

module.exports = Profes_ThemesAges;

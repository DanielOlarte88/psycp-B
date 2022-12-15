const { sequelize } = require("../config/mysql")
const { DataTypes } = require("sequelize");
const Profes = require("./profes");
const Themes = require("./themes");
const ThemesGroups = require("./themesGroups");
const ProfesSpec_ThemesAges = require("./profesSpec-themesAges");
const ThemesAges = require("./themesAges");

const ProfesSpec = sequelize.define(
  "profes_spec",
  {
    profes_spec_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    profes_profes_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    themes_themes_id: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      allowNull: false,
    },
    themes_themes_groups_themes_groups_id: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      allowNull: false,
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

ProfesSpec.findAllData = function (id) {
  ProfesSpec.belongsTo(Profes, {foreignKey: "profes_profes_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  ProfesSpec.belongsTo(Themes, {foreignKey: "themes_themes_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  ProfesSpec.belongsTo(ThemesGroups, {foreignKey: "themes_themes_groups_themes_groups_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  ProfesSpec.hasMany(ProfesSpec_ThemesAges, {foreignKey: "profes_spec_profes_spec_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  ProfesSpec_ThemesAges.belongsTo(ThemesAges, {foreignKey: "themes_ages_themes_ages_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  
  return ProfesSpec.findAll({
    where: {
      profes_profes_id: 2,
      activate: 1
    },
    include: [
      {model: Profes, attributes: []},
      {model: Themes, attributes: []},
      {model: ThemesGroups, attributes: []},
    //   {model: ProfesSpec_ThemesAges, attributes: ['themes_ages_themes_ages_id'],
    //     include: [{
    //       model: ThemesAges, attributes: ['themes_ages'],
    //     }],
    //     // attributes: [
    //     //   [sequelize.col('theme_age.themes_ages'), 'themes_ages'],
    //     // ]
    // }],
    ],
    attributes: [
      [sequelize.col('theme.themes'), 'themes_themes_id'],
      [sequelize.col('themes_group.themes_groups'), 'themes_themes_groups_themes_groups_id'],
      'themes_specialty_level', 'themes_experience_level', 'profes_spec_id'
    ]
  })
};

module.exports = ProfesSpec;

const { sequelize } = require("../config/mysql")
const { DataTypes } = require("sequelize");

const ProfesSpec_ThemesAges = sequelize.define(
  "profes_spec_has_themes_ages",
  {
    profes_spec_profes_spec_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    themes_ages_themes_ages_id: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
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

module.exports = ProfesSpec_ThemesAges;

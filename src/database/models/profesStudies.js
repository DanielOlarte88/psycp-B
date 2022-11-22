const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");

const ProfesStudies = sequelize.define(
  "profes_studies",
  {
    profes_studies_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    profes_studies_careers_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    profes_studies_edu_institution_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    profes_studies_instruction_level_code: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    profes_studies_with_mention: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profes_studies_instruction_year_code: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    profes_studies_mental_career: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    profes_profes_id: {
      type: DataTypes.INTEGER,
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

module.exports = ProfesStudies;

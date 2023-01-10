const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");
const Careers = require("./careers");
const EduInstitutions = require("./eduInstitutions");
const InstructionLevels = require("./instructionLevels");
const InstructionYears = require("./instructionYears");
const StudiesArea = require("./studiesArea");

const ProfesStudies = sequelize.define(
  "profes_studies",
  {
    profes_studies_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    profes_studies_career_code: {
      type: DataTypes.INTEGER,
    },
    profes_studies_edu_institution_code: {
      type: DataTypes.INTEGER,
    },
    profes_studies_instruction_level_code: {
      type: DataTypes.TINYINT,
    },
    profes_studies_with_mention: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profes_studies_instruction_year_code: {
      type: DataTypes.TINYINT,
    },
    profes_studies_studies_area_code: {
      type: DataTypes.TINYINT,
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
  },
);

ProfesStudies.findAllData = function (id) {
  ProfesStudies.belongsTo(Careers, {foreignKey: "profes_studies_career_code", onUpdate: "CASCADE", onDelete: "CASCADE"});
  ProfesStudies.belongsTo(EduInstitutions, {foreignKey: "profes_studies_edu_institution_code", onUpdate: "CASCADE", onDelete: "CASCADE"});
  ProfesStudies.belongsTo(InstructionLevels, {foreignKey: "profes_studies_instruction_level_code", onUpdate: "CASCADE", onDelete: "CASCADE"});
  ProfesStudies.belongsTo(InstructionYears, {foreignKey: "profes_studies_instruction_year_code", onUpdate: "CASCADE", onDelete: "CASCADE"});
  ProfesStudies.belongsTo(StudiesArea, {foreignKey: "profes_studies_studies_area_code", onUpdate: "CASCADE", onDelete: "CASCADE"});

  return ProfesStudies.findAll({
    where: {
      profes_profes_id: id,
      activate: 1
    },
    include: [
      {model: Careers, attributes: []},
      {model: EduInstitutions, attributes: []},
      {model: InstructionLevels, attributes: []},
      {model: InstructionYears, attributes: []},
      {model: StudiesArea, attributes: []},
    ],
    attributes: [
      [sequelize.col('career.careers'), 'profes_studies_career_code'],
      [sequelize.col('edu_institution.edu_institutions'), 'profes_studies_edu_institution_code'],
      [sequelize.col('instruction_level.instruction_levels'), 'profes_studies_instruction_level_code'],
      [sequelize.col('instruction_year.instruction_years'), 'profes_studies_instruction_year_code'],
      [sequelize.col('studies_area.studies_area'), 'profes_studies_studies_area_code'],
      "profes_studies_id", 'profes_studies_with_mention'
    ],
    raw: true,
  })
};

module.exports = ProfesStudies;
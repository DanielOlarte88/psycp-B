const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");
const Careers = require("./careers");
const EduInstitutions = require("./eduInstitutions");
const InstructionLevels = require("./instructionLevels");
const InstructionYears = require("./instructionYears");

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
  },
);

ProfesStudies.findAllData = function (id) {
  ProfesStudies.belongsTo(Careers, {foreignKey: "profes_studies_careers_code", onUpdate: "CASCADE", onDelete: "CASCADE"});
  ProfesStudies.belongsTo(EduInstitutions, {foreignKey: "profes_studies_edu_institution_code", onUpdate: "CASCADE", onDelete: "CASCADE"});
  ProfesStudies.belongsTo(InstructionLevels, {foreignKey: "profes_studies_instruction_level_code", onUpdate: "CASCADE", onDelete: "CASCADE"});
  ProfesStudies.belongsTo(InstructionYears, {foreignKey: "profes_studies_instruction_year_code", onUpdate: "CASCADE", onDelete: "CASCADE"});
  
  return ProfesStudies.findAll({
    where: {
      profes_profes_id: 1,
      activate: 1
    },
    include: [
      {model: Careers, attributes: ['careers']},
      {model: EduInstitutions, attributes: ['edu_institutions']},
      {model: InstructionLevels, attributes: ['instruction_levels']},
      {model: InstructionYears, attributes: ['instruction_years']},
    ],
    attributes: [
      [sequelize.literal('`career`.`careers`'), 'profes_studies_careers_code'],
      [sequelize.literal('`edu_institution`.`edu_institutions`'), 'profes_studies_edu_institution_code'],
      [sequelize.literal('`instruction_level`.`instruction_levels`'), 'profes_studies_instruction_level_code'],
      [sequelize.literal('`instruction_year`.`instruction_years`'), 'profes_studies_instruction_years_code'],
      'profes_studies_with_mention'
    ],
  })
};

module.exports = ProfesStudies;
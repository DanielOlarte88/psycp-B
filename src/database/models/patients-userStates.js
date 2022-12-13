const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");
const Persons = require("./persons");

const Patients_UserStates = sequelize.define(
  "patients_has_user_states",
  {
    patients_patients_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      // references: {
      //   model: patientsModel,
      //   key: 'id'
      // },
      // onUpdate: 'CASCADE',
      // onDelete: 'SET NULL'
    },
    patients_users_users_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      // references: {
      //   model: personsModel,
      //   key: 'id'
      // },
      // onUpdate: 'CASCADE',
      // onDelete: 'SET NULL'
    },
    user_states_user_states_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      // references: {
      //   model: userStatesModel,
      //   key: 'id'
      // },
      // onUpdate: 'CASCADE',
      // onDelete: 'SET NULL'
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

Patients_UserStates.findAllData = function (id) {
  Patients_UserStates.belongsTo(Persons, {foreignKey: "persons_persons_id", onUpdate: "CASCADE", onDelete: "CASCADE"});

  return Patients_UserStates.findAll({
    where: {
      profes_profes_id: 1,
      activate: 1
    },
    include: [
      {model: Careers, attributes: ['careers']},
      {model: EduInstitutions, attributes: ['edu_institutions']},
      {model: InstructionLevels, attributes: ['instruction_levels']},
      {model: InstructionYears, attributes: ['instruction_years']},
      {model: StudiesArea, attributes: ['studies_area']},
    ],
    attributes: [
      [sequelize.literal('`career`.`careers`'), 'profes_studies_career_code'],
      [sequelize.literal('`edu_institution`.`edu_institutions`'), 'profes_studies_edu_institution_code'],
      [sequelize.literal('`instruction_level`.`instruction_levels`'), 'profes_studies_instruction_level_code'],
      [sequelize.literal('`instruction_year`.`instruction_years`'), 'profes_studies_instruction_year_code'],
      [sequelize.literal('`studies_area`.`studies_area`'), 'profes_studies_studies_area_code'],
      'profes_studies_with_mention'
    ],
  })
};

module.exports = Patients_UserStates;

const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");
const Op = sequelize.Op;
const Professional_Patients = require("./professional-patients");
const Institutions_Profes = require("./institutions-profes");
const Profes = require("./profes");
const Patients = require("./patients");
const Users = require("./users");

const ClinicalHistories = sequelize.define(
  "clinicalHistories",
  {
    clinicalHistories_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      unique: true,
    },
    hcp_internal_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    professional_has_patients_professional_has_patients_id: {
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

ClinicalHistories.findAllData = function (id) {
  ClinicalHistories.belongsTo(Professional_Patients, {foreignKey: "professional_has_patients_professional_has_patients_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  Professional_Patients.belongsTo(Patients, {foreignKey: "patients_patients_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  Patients.belongsTo(Users, {foreignKey: "users_users_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  
  Professional_Patients.belongsTo(Institutions_Profes, {foreignKey: "institutions_has_profes_institutions_has_profes_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  Institutions_Profes.belongsTo(Profes, {foreignKey: "profes_profes_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  
  return ClinicalHistories.findAll({
    include: [{
      model: Professional_Patients, attributes: [],
      where: {
        patients_patients_id: id,
        activate: 1
      },
      include: [
        {
          model: Patients, attributes: [],
          include: [{
            model: Users, attributes: [],
          }]
        },
        {
          model: Institutions_Profes, attributes: [],
          include: [{
            model: Profes, attributes: [],
          }]
        }
      ]
    }],
    attributes: [
      [sequelize.fn('concat', '00', sequelize.col('clinicalHistories_id')), 'clinicalHistories_id'],
      [sequelize.fn('DATE_FORMAT', sequelize.col('clinicalHistories.createdAt'), '%Y-%m-%d'), 'createdAt'],
      [sequelize.fn('TIMESTAMPDIFF', sequelize.literal('YEAR'), sequelize.col('professional_has_patient.patient.user.users_birth_date'), sequelize.literal('CURRENT_TIMESTAMP')), 'hcp_patient_age'], 
      [sequelize.col('professional_has_patient.patients_patients_id'), 'patients_patients_id'],
      [sequelize.col('professional_has_patient.patient.user.users_birth_date'), 'users_birth_date'],
      [sequelize.fn('concat', 'NPro-00', sequelize.col('professional_has_patient.institutions_has_profes_institutions_has_profes_id')), 'instProfes_id'],
    ],
    raw: true,
  })
};

module.exports = ClinicalHistories;

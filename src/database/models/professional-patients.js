const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");
const Patients = require("./patients");
const Users = require("./users");
const Institutions_Profes = require("./institutions-profes");

const Professional_Patients = sequelize.define(
  "professional_has_patients",
  {
    professional_has_patients_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    institutions_has_profes_institutions_has_profes_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    patients_patients_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    professional_has_patients_state: {
      type: DataTypes.BOOLEAN,
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

Professional_Patients.findAllData = function (id) {
  Professional_Patients.belongsTo(Patients, {foreignKey: "patients_patients_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  Patients.belongsTo(Users, {foreignKey: "users_users_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
 
  return Professional_Patients.findAll({
    where: {
      institutions_has_profes_institutions_has_profes_id: id,
      activate: 1
    },
    include: [{
      model: Patients, attributes: [],
      include: [{
        model: Users, attributes: [],
      }],
    }],
    attributes: [
      [sequelize.col('patient.patients_internal_code'), 'patients_internal_code'],
      [sequelize.col('patient.patients_id'), 'patients_id'],
      [sequelize.col('patient.user.users_first_name'), 'users_first_name'],
      [sequelize.col('patient.user.users_second_name'), 'users_second_name'],
      [sequelize.col('patient.user.users_third_name'), 'users_third_name'],
      [sequelize.col('patient.user.users_first_surname'), 'users_first_surname'],
      [sequelize.col('patient.user.users_second_surname'), 'users_second_surname'],
      [sequelize.col('patient.user.users_identification_num'), 'users_identification_num'],
    ],
    raw: true,
  })
};

module.exports = Professional_Patients;

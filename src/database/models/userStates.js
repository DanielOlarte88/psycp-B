const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");
const { institutionsModel } = require("../../database/models");
const { profesModel } = require("../../database/models");

const Patients_UserStates = require("./patients-userStates");
const Patients = require("./patients");
const Users = require("./users");

const UserStates = sequelize.define(
  "user_states",
  {
    user_states_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_states: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_states_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    institutions_has_profes_institutions_institutions_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: institutionsModel,
      //   key: 'id'
      // },
      // onUpdate: 'CASCADE',
      // onDelete: 'SET NULL'
    },
    institutions_has_profes_profes_profes_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: profesModel,
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

UserStates.findAllData = function (id) {
  UserStates.hasMany(Patients_UserStates, {foreignKey: "user_states_user_states_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  Patients_UserStates.belongsTo(Patients, {foreignKey: "patients_patients_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  Patients.belongsTo(Users, {foreignKey: "users_users_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
 
  return UserStates.findAll({
    where: {
      institutions_has_profes_profes_profes_id: 1,
      activate: 1
    },
    include: [{
      model: Patients_UserStates, attributes: [],
      include: [{
        model: Patients, attributes: [],
        include: [{
          model: Users, attributes: [],
        }],
      }],
    }],
    attributes: [
      [sequelize.col('patients_has_user_states.patient.patients_internal_code'), 'patients_internal_code'],
      [sequelize.col('patients_has_user_states.patient.user.users_first_name'), 'users_first_name'],
      [sequelize.col('patients_has_user_states.patient.user.users_second_name'), 'users_second_name'],
      [sequelize.col('patients_has_user_states.patient.user.users_third_name'), 'users_third_name'],
      [sequelize.col('patients_has_user_states.patient.user.users_first_surname'), 'users_first_surname'],
      [sequelize.col('patients_has_user_states.patient.user.users_second_surname'), 'users_second_surname'],
      [sequelize.col('patients_has_user_states.patient.user.users_identification_num'), 'users_identification_num'],
    ],
    raw: true,
  })
};

module.exports = UserStates;

const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");
const { patientsModel } = require("../../database/models");
const { personsModel } = require("../../database/models");
const { userStatesModel } = require("../../database/models");

const Patients_UserStates = sequelize.define(
  "patients_has_user_states",
  {
    patients_patients_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: patientsModel,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    patients_persons_persons_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: personsModel,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    user_states_user_states_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: userStatesModel,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
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

module.exports = Patients_UserStates;

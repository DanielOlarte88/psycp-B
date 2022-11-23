const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");
const { patients_userStatesModel } = require("../../database/models");

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
    patients_has_user_states_patients_persons_persons_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: patients_userStatesModel,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    patients_has_user_states_patients_patients_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: patients_userStatesModel,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    patients_has_user_states_user_states_user_states_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: patients_userStatesModel,
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

module.exports = ClinicalHistories;

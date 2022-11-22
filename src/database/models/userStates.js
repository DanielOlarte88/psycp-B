const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");
const { institutionsModel } = require("../../database/models");
const { profesModel } = require("../../database/models");

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
      references: {
        model: institutionsModel,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    institutions_has_profes_profes_profes_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: profesModel,
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

module.exports = UserStates;

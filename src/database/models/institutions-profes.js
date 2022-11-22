const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");
const { institutionsModel } = require("../../database/models");
const { profesModel } = require("../../database/models");

const Institutions_Profes = sequelize.define(
  "institutions_has_profes",
  {
    institutions_institutions_id: {
      type: DataTypes.TINYINT,
      primaryKey: true,
      allowNull: false,
      references: {
        model: institutionsModel,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    profes_profes_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: profesModel,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    institutions_user_internal_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    institutions_user_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    institutions_user_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    institutions_user_state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    institutions_user_mode: {
      type: DataTypes.STRING,
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

module.exports = Institutions_Profes;

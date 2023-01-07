const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const Institutions_Profes = sequelize.define(
  "institutions_has_profes",
  {
    institutions_has_profes_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
      allowNull: false,
    },
    institutions_institutions_id: {
      type: DataTypes.TINYINT,
      primaryKey: true,
      allowNull: false,
    },
    profes_profes_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
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
    user_mode_user_mode_id: {
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

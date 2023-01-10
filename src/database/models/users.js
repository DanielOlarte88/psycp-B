const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");

const Users = sequelize.define(
  "users",
  {
    users_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    users_first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    users_second_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    users_third_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    users_first_surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    users_second_surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    users_identification_num: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    users_cellphone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    users_license_num: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: String,
      allowNull: false,
    },
    password: {
      type: String,
      allowNull: false,
    },
    users_terms: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    users_role: {
      type: DataTypes.ENUM(["profes", "patient", "admin"]),
      allowNull: false,
    },
    mental_careers_mental_careers_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    status_licenses_status_licenses_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    users_surnames_order_reverse: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    users_birth_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    users_birth_hour: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    users_birth_iso3366: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    users_birth_ubigeo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    users_residence_iso3366: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    users_residence_ubigeo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    birth_sexes_birth_sexes_id: {
      type: DataTypes.TINYINT,
      allowNull: true,
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

module.exports = Users;

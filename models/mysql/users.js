const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "users",
  {
    users_id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    users_identification_num:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    users_first_name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    users_second_name:{
      type: DataTypes.STRING,
    },
    users_third_name:{
      type: DataTypes.STRING,
    },
    users_first_surname:{
      type: DataTypes.STRING,
      allowNull: false
    },
    users_second_surname:{
      type: DataTypes.STRING,
      allowNull: false
    },
    users_cellphone:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    users_license_num:{
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    users_terms:{
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    users_internal_code:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: String,
      unique: true
    },
    password: {
      type: String
    },
    mental_careers_mental_careers_id:{
      type: DataTypes.TINYINT,
      allowNull: false
    },
    status_licenses_status_licenses_id:{
      type: DataTypes.TINYINT,
      allowNull: false
    },
    users_role: {
      type: DataTypes.ENUM(["profess", "patient", "admin"]),
      allowNull: false
    },
    activate:{
      type: DataTypes.TINYINT,
      defaultValue: 1,
      allowNull: false
    }
  },
  {
    timestamps: true,
  }
);
User.find = User.findAll;
User.findById = User.findByPk;
module.exports = User;

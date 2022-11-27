const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");

const Persons = sequelize.define(
  "persons",
  {
    persons_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    persons_first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    persons_second_name: {
      type: DataTypes.STRING,
    },
    persons_third_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    persons_first_surname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    persons_second_surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    persons_identification_num: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    persons_cellphone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    persons_license_num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    persons_terms: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    email: {
      type: String,
      allowNull: false,
      unique: true,
    },
    password: {
      type: String,
      allowNull: false,
    },
    persons_role: {
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
Persons.find = Persons.findAll;
Persons.findById = Persons.findByPk;
module.exports = Persons;

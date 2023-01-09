const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");
const ClinicalHistories = require("./professional-patients");
const Professional_Patients = require("./professional-patients");
const Institutions_Profes = require("./institutions-profes");
const Profes = require("./profes");
const Patients = require("./patients");
const Users = require("./users");

const Anamnesis = sequelize.define(
  "anamnesis",
  {
    anamnesis_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      unique: true,
    },
    clinicalHistories_clinicalHistories_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    activate: {
      type: DataTypes.TINYINT,
      defaultValue: 1,
      allowNull: false,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = Anamnesis;


const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const Filiation = sequelize.define(
  "filiation",
  {
    filiation_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      unique: true,
    },
    filiation_iso3366: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    filiation_residence_ubigeo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    careers_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    edu_institution_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    occupation_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    marital_status_marital_status_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    filiation_children_num: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    religion_religion_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    institution_hcp_num: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    health_service_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hcp_date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    institution_referral_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    health_service_referral_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    socioeconomic_level_description_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    anamnesis_anamnesis_id: {
      type: DataTypes.STRING,
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

module.exports = Filiation;

const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");

const EduInstitutions = sequelize.define(
  "edu_institutions",
  {
    edu_institutions_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    edu_institutions: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    edu_institutions_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ubigeo: {
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

module.exports = EduInstitutions;

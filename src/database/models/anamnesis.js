const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

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

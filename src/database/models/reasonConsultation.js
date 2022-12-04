const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const ReasonConsultation = sequelize.define(
  "reason_consultation",
  {
    reason_consultation_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    reason_consultation: {
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

module.exports = ReasonConsultation;

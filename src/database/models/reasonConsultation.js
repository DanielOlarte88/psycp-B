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
    anamnesis_anamnesis_id: {
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

ReasonConsultation.findAllData = function (id) {

  return ReasonConsultation.findAll({
    where: {
      anamnesis_anamnesis_id: id,
      activate: 1
    },
    attributes: [
      'reason_consultation_id',
      [sequelize.col('reason_consultation'), 'value']
    ]
  })
};

module.exports = ReasonConsultation;

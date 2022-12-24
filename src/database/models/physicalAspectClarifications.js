const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const PhysicalAspectClarifications = sequelize.define(
  "physical_aspect_clarifications",
  {
    physical_aspect_clarifications_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    physical_aspect_clarifications: {
      type: DataTypes.TEXT,
      primaryKey: true,
    },
    physical_aspect_physical_aspect_id: {
      type: DataTypes.TINYINT,
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

PhysicalAspectClarifications.findAllData = function (id) {

  return PhysicalAspectClarifications.findAll({
    where: {
      physical_aspect_physical_aspect_id: id,
      activate: 1
    },
    attributes: [
      'physical_aspect_clarifications_id',
      [sequelize.col('physical_aspect_clarifications'), 'value'],
    ]
  })
};


module.exports = PhysicalAspectClarifications;

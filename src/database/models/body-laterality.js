const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");
const { bodyModel } = require("../../database/models");
const { lateralityModel } = require("../../database/models");

const Body_Laterality = sequelize.define(
  "body_has_laterality",
  {
    body_body_id: {
      type: DataTypes.TINYINT,
      primaryKey: true,
      allowNull: false,
      references: {
        model: bodyModel,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    laterality_laterality_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: lateralityModel,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
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

module.exports = Body_Laterality;

const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");
const { sensoryModel } = require("../../database/models");
const { lateralityModel } = require("../../database/models");

const Sensory_Laterality = sequelize.define(
  "sensory_has_laterality",
  {
    sensory_sensory_id: {
      type: DataTypes.TINYINT,
      primaryKey: true,
      allowNull: false,
      references: {
        model: sensoryModel,
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

module.exports = Sensory_Laterality;

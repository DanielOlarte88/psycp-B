const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");
const { sensoryModel } = require(".");
const { lateralityModel } = require(".");
const { physicCondSensoryModel } = require(".");

const PhysicCond_Sensory_Laterality = sequelize.define(
  "physic_cond_has_sensory_has_laterality",
  {
    physic_cond_physic_cond_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: physicCondModel,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    sensory_has_laterality_sensory_sensory_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: sensoryModel,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    sensory_has_laterality_laterality_laterality_id: {
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
    physic_cond_sensory_physic_cond_sensory_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: physicCondSensoryModel,
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

module.exports = PhysicCond_Sensory_Laterality;

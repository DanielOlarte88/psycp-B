const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");
const { physicCondModel } = require(".");
const { physicCondBodyModel } = require(".");
const { bodyModel } = require(".");

const PhysicCond_Body_Laterality = sequelize.define(
  "physic_cond_has_body_has_laterality",
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
    body_has_laterality_body_body_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: physicCondBodyModel,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    body_has_laterality_laterality_laterality_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: body-LateralityModel,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    physic_cond_body_physic_cond_body_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: bodyModel,
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

module.exports = PhysicCond_Body_Laterality;

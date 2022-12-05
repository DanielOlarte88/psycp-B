const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");
const { physicPsychomotKinetHarmoModel } = require("../../database/models");
const { physicPsychomotKinetCondiModel } = require("../../database/models");

const PhysicPsychomotKinetHarmo_PhysicPsychomotKinetCondi = sequelize.define(
  "physic_psychomot_kinet_harmo_has_physic_psychomot_kinet_condi",
  {
    physic_psychomot_kinet_harmo_physic_psychomot_kinet_harmo_id: {
      type: DataTypes.TINYINT,
      primaryKey: true,
      allowNull: false,
      references: {
        model: physicPsychomotKinetHarmoModel,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    physic_psychomot_kinet_condi_physic_psychomot_kinet_condi_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: physicPsychomotKinetCondiModel,
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

module.exports = PhysicPsychomotKinetHarmo_PhysicPsychomotKinetCondi;

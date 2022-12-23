const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");
const PhysicCond_Sensory_Laterality  = require("./physical-sensory");

const PhysicCond = sequelize.define(
  "physic_cond",
  {
    physic_cond_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    glasses: {
      type: DataTypes.STRING,
    },
    hearing_aids: {
      type: DataTypes.STRING,
    },
    physic_cond_none: {
      type: DataTypes.STRING,
    },
    physical_condition_physical_condition_id: {
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

PhysicCond.findAllData = function (id) {
  PhysicCond.belongsTo(PhysicCond_Sensory_Laterality, {foreignKey: "physic_cond_physic_cond_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  
  return PhysicCond.findAll({
    where: {
      physic_cond_id: 1,
      activate: 1
    },
    include: [
      {
        model: PhysicCond_Sensory_Laterality,
        attributes: [
          'sensory_has_laterality_sensory_sensory_id',
          'sensory_has_laterality_laterality_laterality_id',
          'physic_cond_sensory_physic_cond_sensory_id'
        ],
      },
    ],
    attributes: [
      'glasses', 'hearing_aids', 'physic_cond_noned'
    ]
  })
};

module.exports = PhysicCond;

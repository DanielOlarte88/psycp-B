const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");
const Sensory_Laterality  = require("./sensory-laterality");
const Sensory  = require("./sensory");
const Laterality  = require("./laterality");
const PhysicCondSensory  = require("./physicCondSensory");
const PhysicalCondition  = require("./physicalCondition");

const Physical_Sensory = sequelize.define(
  "physical_has_sensory",
  {
    physical_has_sensory_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    sensory_has_laterality_sensory_sensory_id: {
      type: DataTypes.TINYINT,
      primaryKey: true,
    },
    sensory_has_laterality_laterality_laterality_id: {
      type: DataTypes.TINYINT,
      primaryKey: true,
    },
    physical_condition_physical_condition_id: {
      type: DataTypes.TINYINT,
      primaryKey: true,
    },
    physic_cond_sensory_physic_cond_sensory_id: {
      type: DataTypes.TINYINT,
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

Physical_Sensory.findAllData = function (id) {
  Physical_Sensory.belongsTo(Sensory_Laterality, {foreignKey: "sensory_has_laterality_laterality_laterality_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  Sensory_Laterality.belongsTo(Sensory, {foreignKey: "sensory_sensory_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  Sensory_Laterality.belongsTo(Laterality, {foreignKey: "laterality_laterality_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  Physical_Sensory.belongsTo(PhysicCondSensory, {foreignKey: "physic_cond_sensory_physic_cond_sensory_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  Physical_Sensory.belongsTo(PhysicalCondition, {foreignKey: "physical_condition_physical_condition_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  
  return Physical_Sensory.findAll({
    where: {
      physical_condition_physical_condition_id: id,
      activate: 1
    },
    include: [
      {
        model: Sensory_Laterality, attributes: [],
        include: [
          {model: Sensory, attributes: []},
          {model: Laterality, attributes: []}
        ]
      },
      { model: PhysicCondSensory, attributes: [] },
      { model: PhysicalCondition, attributes: [] }
    ],
    attributes: [
      [sequelize.col('sensory_has_laterality.sensory.sensory_part'), 'sensory_has_laterality_sensory_sensory_id'],
      [sequelize.col('sensory_has_laterality.laterality.laterality'), 'sensory_has_laterality_laterality_laterality_id'],
      [sequelize.col('physic_cond_sensory.cond_sensory_level'), 'physic_cond_sensory_physic_cond_sensory_id'],
      [sequelize.col('physical_condition.glasses'), 'glasses'],
      [sequelize.col('physical_condition.hearing_aids'), 'hearing_aids'],
      [sequelize.col('physical_condition.physic_cond_none'), 'physic_cond_none'],
    ]
  })
};

module.exports = Physical_Sensory;

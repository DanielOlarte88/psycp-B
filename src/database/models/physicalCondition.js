const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");
const PhysicComplexion  = require("./physicComplexion");
const PhysicVestment  = require("./physicVestment");
const PhysicVestmentColor  = require("./physicVestmentColor");
const PhysicCleanliness  = require("./physicCleanliness");

const PhysicalCondition = sequelize.define(
  "physical_condition",
  {
    physical_condition_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    according_weather: {
      type: DataTypes.TINYINT,
    },
    weight: {
      type: DataTypes.SMALLINT,
    },
    height: {
      type: DataTypes.SMALLINT,
    },
    glasses: {
      type: DataTypes.TINYINT,
    },
    hearing_aids: {
      type: DataTypes.TINYINT,
    },
    physic_cond_none: {
      type: DataTypes.TINYINT,
    },
    physic_complexion_physic_complexion_id: {
      type: DataTypes.TINYINT,
    },
    physic_vestment_physic_vestment_id: {
      type: DataTypes.TINYINT,
    },
    physic_vestment_color_physic_vestment_color_id: {
      type: DataTypes.TINYINT,
    },
    physic_cleanliness_physic_cleanliness_id: {
      type: DataTypes.TINYINT,
    },
    physical_aspect_physical_aspect_id: {
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

PhysicalCondition.findOneData = function (id) {
  PhysicalCondition.belongsTo(PhysicComplexion, {foreignKey: "physic_complexion_physic_complexion_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  PhysicalCondition.belongsTo(PhysicVestment, {foreignKey: "physic_vestment_physic_vestment_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  PhysicalCondition.belongsTo(PhysicVestmentColor, {foreignKey: "physic_vestment_color_physic_vestment_color_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  PhysicalCondition.belongsTo(PhysicCleanliness, {foreignKey: "physic_cleanliness_physic_cleanliness_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  
  return PhysicalCondition.findOne({
    where: {
      physical_aspect_physical_aspect_id: 1,
      activate: 1
    },
    include: [
      {model: PhysicComplexion, attributes: []},
      {model: PhysicVestment, attributes: []},
      {model: PhysicVestmentColor, attributes: []},
      {model: PhysicCleanliness, attributes: []}
    ],
    attributes: [
      'according_weather', 'weight', 'height',
      'physic_complexion_physic_complexion_id',
      'physic_vestment_physic_vestment_id',
      'physic_vestment_color_physic_vestment_color_id',
      'physic_cleanliness_physic_cleanliness_id',
    ]
  })
};

module.exports = PhysicalCondition;

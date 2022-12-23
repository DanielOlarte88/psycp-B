const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");
const Body_Laterality  = require("./body-laterality");
const Body  = require("./body");
const Laterality  = require("./laterality");
const PhysicCondBody  = require("./physicCondBody");

const Physical_Body = sequelize.define(
  "physical_has_body",
  {
    physical_has_body_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    body_has_laterality_body_body_id: {
      type: DataTypes.TINYINT,
      primaryKey: true,
    },
    body_has_laterality_laterality_laterality_id: {
      type: DataTypes.TINYINT,
      primaryKey: true,
    },
    physical_condition_physical_condition_id: {
      type: DataTypes.TINYINT,
      primaryKey: true,
    },
    physic_cond_body_physic_cond_body_id: {
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

Physical_Body.findAllData = function (id) {
  Physical_Body.belongsTo(Body_Laterality, {foreignKey: "body_has_laterality_laterality_laterality_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  Body_Laterality.belongsTo(Body, {foreignKey: "body_body_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  Body_Laterality.belongsTo(Laterality, {foreignKey: "laterality_laterality_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  Physical_Body.belongsTo(PhysicCondBody, {foreignKey: "physic_cond_body_physic_cond_body_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  
  return Physical_Body.findAll({
    where: {
      physical_condition_physical_condition_id: 1,
      activate: 1
    },
    include: [
      {
        model: Body_Laterality, attributes: [],
        include: [
          {model: Body, attributes: []},
          {model: Laterality, attributes: []}
        ]
      },
      { model: PhysicCondBody, attributes: [] }
    ],
    attributes: [
      [sequelize.col('body_has_laterality.body.body_part'), 'body_has_laterality_body_body_id'],
      [sequelize.col('body_has_laterality.laterality.laterality'), 'body_has_laterality_laterality_laterality_id'],
      [sequelize.col('physic_cond_body.physical_cond_body'), 'physical_condition_physical_condition_id'],
    ],
  })
};

module.exports = Physical_Body;

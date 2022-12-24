const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");
const PhysicPsychomotBodyPosition  = require("./physicPsychomotBodyPosition");
const PhysicPsychomotDisplacement  = require("./physicPsychomotDisplacement");
const PhysicPsychomotMuscleTone  = require("./physicPsychomotMuscleTone");
const PhysicPsychomotKinetHarmo  = require("./physicPsychomotKinetHarmo");
const PhysicPsychomotKinetHarmo_PhysicPsychomotKinetCondi  = require("./physicPsychomotKinetHarmo-physicPsychomotKinetCondi");
const PhysicPsychomotMotorSkills  = require("./physicPsychomotMotorSkills");

const PhysicalPsychomotricity = sequelize.define(
  "physical_psychomotricity",
  {
    physical_psychomotricity_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    motor_activity_level_description_id: {
      type: DataTypes.STRING,
    },
    physical_aspect_physical_aspect_id: {
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

PhysicalPsychomotricity.findAllData = function (id) {
  PhysicalPsychomotricity.hasOne(PhysicPsychomotBodyPosition, {foreignKey: "physical_psychomotricity_physical_psychomotricity_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  PhysicalPsychomotricity.hasMany(PhysicPsychomotDisplacement, {foreignKey: "physical_psychomotricity_physical_psychomotricity_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  PhysicalPsychomotricity.hasMany(PhysicPsychomotMuscleTone, {foreignKey: "physical_psychomotricity_physical_psychomotricity_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  PhysicalPsychomotricity.hasOne(PhysicPsychomotKinetHarmo, {foreignKey: "physical_psychomotricity_physical_psychomotricity_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  PhysicPsychomotKinetHarmo.hasMany(PhysicPsychomotKinetHarmo_PhysicPsychomotKinetCondi, {foreignKey: "physic_psychomot_kinet_harmo_physic_psychomot_kinet_harmo_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  PhysicalPsychomotricity.hasMany(PhysicPsychomotMotorSkills, {foreignKey: "physical_psychomotricity_physical_psychomotricity_id", onUpdate: "CASCADE", onDelete: "CASCADE"});

  return PhysicalPsychomotricity.findAll({
    where: {
      physical_aspect_physical_aspect_id: id,
      activate: 1
    },
    include: [
      {model: PhysicPsychomotBodyPosition, attributes: []},
      {model: PhysicPsychomotDisplacement, attributes: []},
      {model: PhysicPsychomotMuscleTone, attributes: []},
      {model: PhysicPsychomotKinetHarmo, attributes: ['physical_psychomotricity_physical_psychomotricity_id'],
        include: [      
          {model: PhysicPsychomotKinetHarmo_PhysicPsychomotKinetCondi, attributes: ['physic_psychomot_kinet_condi_physic_psychomot_kinet_condi_id']}
        ],
      },
      {model: PhysicPsychomotMotorSkills, attributes: ['clumsiness_int', 'slowness_int', 'looseness_int']}
    ],
    attributes: [
      'motor_activity_level_description_id',
      [sequelize.col('physic_psychomot_body_position.physic_psychomot_forward_back_physic_psychomot_forward_back_id'), 'physic_psychomot_forward_back_physic_psychomot_forward_back_id'],
      [sequelize.col('physic_psychomot_body_position.physic_psychomot_right_left_physic_psychomot_right_left_id'), 'physic_psychomot_right_left_physic_psychomot_right_left_id'],
      [sequelize.col('physic_psychomot_displacements.physic_psychomot_displa_condi_physic_psychomot_displa_condi_id'), 'physic_psychomot_displa_condi_physic_psychomot_displa_condi_id'],
      [sequelize.col('physic_psychomot_displacements.displacement_level_description_id'), 'displacement_level_description_id'],
      [sequelize.col('physic_psychomot_muscle_tones.physic_psychomot_muscle_condi_physic_psychomot_muscle_condi_id'), 'physic_psychomot_muscle_condi_physic_psychomot_muscle_condi_id'],
      [sequelize.col('physic_psychomot_muscle_tones.muscle_tone_level_description_id'), 'muscle_tone_level_description_id'],
    
      [sequelize.col('physic_psychomot_kinet_harmo.kinet_harmo_agitation_porcent'), 'kinet_harmo_agitation_porcent'],
      [sequelize.col('physic_psychomot_kinet_harmo.kinet_harmo_restlessness_porcent'), 'kinet_harmo_restlessness_porcent'],
      [sequelize.col('physic_psychomot_kinet_harmo.kinet_harmo_functional_porcent'), 'kinet_harmo_functional_porcent'],
      [sequelize.col('physic_psychomot_kinet_harmo.kinet_harmo_rigidity_porcent'), 'kinet_harmo_rigidity_porcent'],
      [sequelize.col('physic_psychomot_kinet_harmo.kinet_harmo_stupor_porcent'), 'kinet_harmo_stupor_porcent'],
      [sequelize.col('physic_psychomot_kinet_harmo.kinet_harmo_none'), 'kinet_harmo_none'],
      
      [sequelize.col('physic_psychomot_motor_skills.motor_skills_level_description_id'), 'motor_skills_level_description_id'],
    ]
  })
};

module.exports = PhysicalPsychomotricity;

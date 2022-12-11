const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");

const PhysicCondBody = sequelize.define(
  "physic_cond_body",
  {
    physic_cond_body_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    physical_cond_body: {
      type: DataTypes.INTEGER,
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

// ProfesStudies.associate = models => {
//   ProfesStudies.belongsTo(models.Careers, { as: 'careers', onDelete: 'CASCADE', foreignKey: { name: 'careers_id', allowNull: false }});
//   ProfesStudies.belongsTo(models.Institutions, { as: 'institutions', onDelete: 'CASCADE', foreignKey: { name: 'institutions_id', allowNull: false }});
//   ProfesStudies.belongsTo(models.InstructionLevels, { as: 'instruction_levels', onDelete: 'CASCADE', foreignKey: { name: 'instruction_levels_id', allowNull: false }});
//   ProfesStudies.belongsTo(models.InstructionYears, { as: 'instruction_years', onDelete: 'CASCADE', foreignKey: { name: 'instruction_years_id', allowNull: false }});
// }

module.exports = PhysicCondBody;

const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const PhysicPsychomotBodyPosition = sequelize.define(
  "physic_psychomot_body_position",
  {
    physic_psychomot_body_position_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    physic_psychomot_forward_back_physic_psychomot_forward_back_id: {
      type: DataTypes.TINYINT,
    },
    physic_psychomot_right_left_physic_psychomot_right_left_id: {
      type: DataTypes.TINYINT,
    },
    physical_psychomotricity_physical_psychomotricity_id: {
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

module.exports = PhysicPsychomotBodyPosition;

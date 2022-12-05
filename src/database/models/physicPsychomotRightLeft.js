const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const PhysicPsychomotRightLeft = sequelize.define(
  "physic_psychomot_right_left",
  {
    physic_psychomot_right_left_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    body_position_right_left: {
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

module.exports = PhysicPsychomotRightLeft;
